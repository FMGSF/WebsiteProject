import supabase from '$lib/db'
import { user } from "$lib/stores/authStore"
import { goto } from "$app/navigation";

//---------------Reading data from supabase
export async function readUserData() {
    const { data, error } = await supabase
        .from(`Profiles`)
        .select()
    if (error) throw new Error(error.message);
    return data;
}


export async function readTableData() {
    const { data, error } = await supabase
        .from(`Tables`)
        .select()
    if (error) throw new Error(error.message);
    return data;
}


export async function readReservationData() {
    const { data, error } = await supabase
        .from(`Reservations`)
        .select()
    if (error) throw new Error(error.message)
    return data;
}


//------------------Check availability for booking a table 
export async function checkAvailability(time, date, nPeople) {
    time = time + ":00";
    const infoTables = await readTableData();
    var totRes = await readReservationData();
    var othRes = totRes.filter(function(value) {
        if (value.date == date && value.time == time) return value
    })
    var possibleTables = infoTables.filter(function(value) {
        if (value.maxPeople >= nPeople && value.minPeople <= nPeople) {
            if (othRes.length) {
                var okay = true;
                for (var j = 0; j < othRes.length; j++) {
                    if (value.id === othRes[j].table) {
                        okay = false;
                        break;
                    }
                }
                if (okay === true) return value;
            } else {
                return value;
            }
        }
    })
    if (possibleTables.length) {
        var leastMax = possibleTables[0];
        for (var i = 0; i < possibleTables.length; i++) {
            if (possibleTables[i].maxPeople < leastMax.maxPeople) {
                leastMax = possibleTables[i];
            }
        }
        return leastMax;
    } else {
        return false;
    }
}

//-----------handler of the reservation request, writes data on the supabase db
export const reservationHandler = async(hour, date, nPeople) => {
    console.log("Calback reservationHandler request made for (hour, date, nPeople) = ", hour, date, nPeople);
    if (user) {
        const uId = supabase.auth.user().id;
        var spot = await checkAvailability(hour, date, nPeople);
        if (spot) {
            try {
                const { error } = await supabase
                    .from('Reservations')
                    .insert([{ nPeople: nPeople, date: date, time: hour, userId: uId, table: spot.id }], { returning: "minimal" } //Setting returning to minimal for liminting the default return implemented by .insert() 
                    )
                if (error) {
                    console.log("Callback reservationHandler");
                    console.log("ERROR : Could not write data");
                    throw error;
                } else {
                    console.log("Callback reservationHandler");
                    console.log("Data written successfully");
                    alert("The reservation was successfull");
                }
            } catch (err) {
                console.error(err);
                alert(err.error_description || err.message);
            } finally {
                console.log("function call ended")
            }
        } else {
            alert("The research did not produce any result");
        }
    } else {
        alert("Log-in in order to be able to reserve a table");
    }
}

//--------------------For handling the signup
export const signUpHandler = async(emailSignin, passwordSignin, confPasswdSignin, userName, firstName, lastName, phoneNumber) => {
    if (passwordSignin === confPasswdSignin) {
        try {
            console.log(emailSignin);
            const { error } = await supabase.auth.signUp({
                email: emailSignin,
                password: passwordSignin
            });
            if (error) {
                throw error;
            } else {
                const uid = await supabase.auth.user().id;
                insertUserData(uid, userName, emailSignin, firstName, lastName, phoneNumber);
                alert("Subscribed Successfully!!!");
                goto("/login");
                console.log(supabase.auth.onAuthStateChange)
            }
        } catch (err) {
            console.error(err);
            alert(err.error_description || err.message);
        } finally {
            console.log("Function call ended");
        }
    } else {
        alert("The inserted passwords do not match");
    }
}


//---------------------For handling the login
export const loginHandler = async(emailLogin, passwordLogin) => {
        try {
            //logging in the user
            const { error } = await supabase.auth.signIn({
                email: emailLogin,
                password: passwordLogin
            });
            if (error) {
                console.log(error);
                alert("Check the email used for the login");
                throw error;
            } else {
                console.log("The connected user is :", supabase.auth.user());
                //alert("Successfully logged in");
                user.set(true);
                console.log(user);
                //goto("/book");
            }
        } catch (err) {
            console.error(err);
            alert(err.error_description || err.message);
        } finally {
            console.log("Function call ended");
        }
    }
    //-----------------Writing message data on supabase db

export const insertMessageData = async(uid, object, message) => {
    try {
        const { error } = await supabase
            .from('Messages')
            .insert([{ object: object, text: message, author: uid }], { returning: "minimal" } //Setting returning to minimal for liminting the default return implemented by .insert() 
            )
        if (error) {
            console.log("Callback insertMessageData");
            console.log("ERROR : Could not write data");
            throw error;
        } else {
            console.log("Callback insertMessageData");
            console.log("Data written successfully");
            alert("Your message was successfully sent!");
        }
    } catch (err) {
        console.error(err);
        alert(err.error_description || err.message);
    } finally {
        console.log("function call ended")
    }
}

//-----------------Writing user data on supabase db at sign up
export const insertUserData = async(uid_, username_, email_, name_, surname_, phone_) => {
    try {
        const { error } = await supabase
            .from('Profiles')
            .insert(
                [{ id: uid_, username: username_, name: name_, surname: surname_, phoneNumber: phone_, email: email_ }], { returning: "minimal" }
            )
        if (error) {
            console.log("Callback insertUserData");
            console.log("ERROR : Could not write data");
            throw error;
        } else {
            console.log("Callback insertUserData");
            console.log("Data written successfully");
        }
    } catch (err) {
        console.error(err);
        alert(err.error_description || err.message);
    } finally {
        console.log("function call ended")
    }
}

//----------------Filtering profile info 
export const getProfileInfo = async(uid_) => {
    try {
        var infoUsers = await readUserData();
        var profileInfo;
        for (var i = 0; i < infoUsers.length; i++) {
            if (infoUsers[i].id === uid_) {
                profileInfo = infoUsers[i];
            }
        }
        return profileInfo;
    } catch (err) {
        console.log(err);
        alert(err.error_description || err.message);
    }
}