<script>
	import {user} from "$lib/stores/authStore";
    import {loginHandler} from "$lib/assets";
    import {goto} from "$app/navigation";
	//console.log(supabase.auth.user);
    let emailLogin, passwordLogin;
    const handleLogin = async () => {
        loginHandler(emailLogin, passwordLogin);
    }
    console.log("userSupabaseObject", user);
</script>


<div class="flex flex-col justify-center">
    <form on:submit|preventDefault = {handleLogin} class="flex flex-column justify-between">       
        <div class="flex flex-col justify-center text-sm piece-left">  
            <h1 class=header-log-in>
                LOG IN
            </h1>
            <label  class="font-bold text-center label" for = "email">
                Email
            </label>
            <input class="txtinbox appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500"
             type = "email" name ="email" bind:value ={emailLogin}>
            <label  class="font-bold text-center label"for = "psswd">
                Password
            </label>
            <input placeholder="password" class="txtinbox appearance-none shadow-sm border p-2 focus:outline-none focus:border-gray-500"
             type = "password" name ="psswd" bind:value ={passwordLogin}>

            <button class= "Submit w-full shadow-sm rounded button label"type = "Submit">
                Submit
            </button>
            <a href="../signup">
                <p class="clickhere font-bold text-grey-800 text-center label-link">
                    Click here for signing up if it's your first time here
                </p>    
            </a>
            
        </div>

         
        <img src="../../static/priscilia.jpg" alt="Fishmarket" class="image-log-in">
          
    </form>
    <h1 class="txt-top wrapper-login">
        Join our community
    </h1> 
</div>





<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display:ital,wght@0,700;0,900;1,600;1,900&display=swap');    
    @font-face {
		font-family: 'Better Grade';
		src: url('../../static/fonts/BetterGrade.eot');
		src: url('../../static/fonts/BetterGrade.eot?#iefix') format('embedded-opentype'),
			url('../../static/fonts/BetterGrade.woff2') format('woff2'),
			url('../../static/fonts/BetterGrade.woff') format('woff'),
			url('../../static/fonts/BetterGrade.ttf') format('truetype'),
			url('../../static/fonts/BetterGrade.svg#BetterGrade') format('svg');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

    .wrapper-login{
        width:100%;
		height:100%;
		background-image: url("../../static/piscaria.svg");
		background-size: cover;
        background-position: center;
    }
    
    .txt-top{
        color: #6a8aaa;
		font-family:"Better Grade";
		margin-top:5%;
		margin-bottom: 5%;
		font-size: 1000%;
		flex-basis: 100%;
		flex-shrink: 3;
	}
    
    
    .image-log-in{
        width:50%;
        height: 50%;
        size:100%;
        margin-bottom: 3%;
    }

    .header-log-in{
        color: #6a8aaa;
		font-family: "Playfair Display";
		font-weight:300;
    	font-size: 44px;
    	letter-spacing: 5px;
		padding-top: 5%;
		padding-bottom: 5%;
    }

    .label
    {
        margin-top: 15%;
        margin-bottom: 0%;
		font-family: 'Playfair Display';
		font-weight: bold;
        font-style: italic;
		font-size: 15px;
		color: #6a8aaa;
    }

    .txtinbox{
        font-family: 'Playfair Display';
		font-weight: normal;
        font-style: italic;
		font-size: 15px;
		color: #6a8aaa;
    }

    .Submit
    {
        margin-top: 10%;
        margin-bottom: 3%;
		font-family: 'Lato';
		font-weight: bold;
		font-size: 12px;
		color: #6a8aaa;
    }

    .clickhere{
        font-family: 'Lato';
		font-weight: bold;
		font-size: 17px;
        font-weight: 800;
        color: #6a8aaa;
    }


    .button{
        margin-top:10%;
        margin-bottom: 10%;
    }


    .piece-left{
        margin-left: auto;
        margin-right: auto;
    }
    .label-link{
        margin-top: 15%;
        font-size: smaller;
        
    }
</style>
