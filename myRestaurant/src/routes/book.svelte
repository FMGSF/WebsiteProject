<script>
    import {reservationHandler} from "$lib/assets";
    import { user } from "$lib/stores/authStore";
    import Login from "$lib/Login.svelte";
    var date, hour, nPeople;   
    function handleSubmit() {
        console.log("Callback handleSubmit");
        reservationHandler(hour, date, nPeople);
    }
</script>



  
<svelte:head>
	<title>BOOK</title>
</svelte:head>

{#if !$user}
    <div class="flex flex-col justify-center">
        <!--<div class="image-log-in flex flex-col justify-center">
            <img src="../../static/edits/svg/leaf.svg" alt="menu visualize" class="menu-img-blck-3">
        </div>-->
        <Login/>
    </div>
	<section class="third blocks">
		<div class="wrapper-block-3 flex flex-wrap flex-row text-center font-bold justify-center">		
				<div class="block-3-menu-image-1">
					<a href="menu-1 wrapper-link-block-3" class="menu-link">
						<p class="boxesunderpics">
							LUNCH AND DINNER
						</p>
						<img src="../../static/fooddisplayone.png" alt="menu visualize" class="menu-img-blck-3">
					</a>			
				</div>
				<div class="block-3-menu-image-2">
					<a href="menu-2 wrapper-link-block-2" class="menu-link">
						<p class="boxesunderpics">
							WINES AND BEVERAGES
						</p>
						<img src="../../static/fooddisplaytwo.png" alt="menu visualize" class="menu-img-blck-3">
					</a>
				</div>
				<div class="block-3-menu-image-3">
					<a href="menu-3 wrapper-link-block-2" class="menu-link">
						<p class="boxesunderpics">
							AFTERNOON TEA
						</p>
						<img src="../../static/fooddisplaythree.png" alt="menu visualize" class="menu-img-blck-3">
					</a>
				</div>
		</div>
	</section>





{/if}
{#if $user}
    <div class="flex flex-col justify-center main-book">
        <div class="image-log-in flex flex-col justify-center">
            <img src="../../static/edits/svg/leaf.svg" alt="menu visualize" class="menu-img-blck-3">
        </div>
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-row justify-center">
                <form on:submit|preventDefault = {handleSubmit} class = "flex flex-row justify-between  main-form" id = "form">            
                    <div class="flex flex-col justify-center text-sm piece-left-book">  
                        <h1 class="head">
                            BOOK A <br> TABLE HERE
                        </h1>
                        <div class="flex flex-col justify-center">
                            <label for="date" class="text-center label">
                                Select a date
                            </label>
                            <input type = "date" class="input" id = "input-date" name = "date" min="$now" bind:value = {date}/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="hour" class="text-center label">
                                Select an hour
                            </label>
                            <input type="time" class="input" id ="hour" name="hour" min="9:00" max="23:00" step="1800" bind:value = {hour}/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <label for="nPeople" class="text-center label">
                                Select the number of people
                            </label>
                            <input type="number" class="input" name="nPeople" min="1" max="15" bind:value = {nPeople}/>
                        </div>
                        <button class= "Submit w-full shadow-sm rounded button submit"type = "Submit">
                            Submit
                        </button>
                        <a href="../signup">
                            <p class="clickhere font-bold text-grey-800 text-center label-link">
                                Click here for signing up if it's your first time here
                            </p>    
                        </a>         
                    </div>                    
                </form>
            </div>
            
            </div>
        <h1 class="txt-top wrapper-login">
            See you soon!
        </h1> 
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
        width:10%;
        height: 10%;
        size:10%;
        margin-top: 0%;
        margin-bottom: 0%;
        margin-left: 45%;
        border-radius: 8px;
    }

    
    .label
    {
        margin-top: 10%;
        margin-bottom: 3%;
		font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 17px;
		color: #6a8aaa;
		font-style: italic;
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

    .label-link{
        margin-top: 15%;
        font-size: smaller;
        
    }
    .head{
        color: #6a8aaa;
		font-family: "Playfair Display";
		font-weight:300;
    	font-size: 44px;
    	letter-spacing: 5px;
		padding-top: 20%;
		padding-bottom: 10%;
        line-height: 43px;
    }
    .main-form{
        margin-bottom:15%;
    }
    .label{
        margin-bottom: 5%;
        margin-top:5%;
    }
    .input{
        border-radius: 7%;
        size:100%;
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


    .wrapper-block-3{
        background-image: url("../../static/edits/svg/threelines.svg");
        background-size:cover;
        width:100%;
        height:50%;
    }

    .block-3-menu-image-1,
    .block-3-menu-image-2,
    .block-3-menu-image-3{
        flex-basis:20%;
        margin-left:2%;
        margin-right:2%;
        margin-top:25%;
        margin-bottom: 25%;
        size:15%;
        border-radius: 3%;
    }


    .boxesunderpics {
        fill: #FFFFFF;
        color: #6a8aaa;
        border-style: solid;
        border-width: 3px 3px 3x 3px;
        margin-bottom: 5%;
        margin-top: 5%;
        font-family: 'Lato';
        font-weight: 800;
        font-size: 13px;
        letter-spacing: 3px;
        display: inline-block;
        line-height: 1;
        padding: 14px 28px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        text-align: center;
        -webkit-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }
    .menu-img-blck-3{
        border-radius: 7%;
    }

</style>
