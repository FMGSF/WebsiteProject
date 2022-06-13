<script>
    import {user} from "$lib/stores/authStore";
    import {insertMessageData} from "$lib/assets";
    import supabase from "$lib/db";
    import Login from "$lib/Login.svelte";
    var messageObj, messageText;
    const handleMessage = async () =>{
        insertMessageData(supabase.auth.user().id, messageObj, messageText);
    }
</script>


{#if $user}
    <form action="action_page.php" on:submit|preventDefault = {handleMessage} class="flex flex-col justify-center wrapper">
        <label for="object" class="text-center label">
            What is it about?
        </label>
        <input bind:value ={messageObj} type="text" class="messagebox flex flex-col justify-center wrapper" id="object" name="object" placeholder="">
        <label for="texts" class="text-center label label">
            Your comments
        </label>
        <input bind:value ={messageText} type="text" id="text" name="text" class="messagebox flex flex-col justify-center wrapper" placeholder="">
        <input type="submit" value="Submit" class="submit"> 
    </form>
{/if}

{#if !$user}
    <div class="flex flex-col justify-center">
        <Login/>
    </div>
{/if}   



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
    .wrapper{
        margin-left:15%;
        margin-right:15%;
    }
    input[type=submit] {
        background-color: #7898b8;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .submit{
        margin-top:3%;
        margin-bottom:5%;
    }
    .label{
        margin-top:5%;
        margin-bottom:3%;
        color: #7898b8;
    }

    .label{
        margin-top: 10%;
        margin-bottom: 3%;
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 17px;
        color: #6a8aaa;
        font-style: italic;
    }

    .submit{
        margin-bottom: 30%;
        margin-top: 5%;
        margin-left:30%;
        font-family: 'Playfair Display';
        font-weight: bold;
        font-size: 17px;
        color: #6a8aaa;
        font-style: italic;
        width: 42%;
    }


    .messagebox{
        font-family: "Playfair Display";
        font-size: 17px;
        font-style: normal;
        color: lightslategray;
        height: 200px;
        width: 420px;
        margin-left: 30%;
    }
</style>