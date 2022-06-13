<script lang= "ts">
	import '../app.css';
    import { user } from "$lib/stores/authStore";
	import  supabase  from "$lib/db";
	import { goto } from '$app/navigation';
	import Contact from './contact.svelte';
	const redirectToHome = () =>{
		console.log("Callback redirectHome, redirecting");
		goto("./");
	}

	const handleLogOut = async() =>{
		try{
			const {error} = await supabase.auth.signOut();
			if (error){
                console.log(error);
                alert("Callback handleLogOut ERROR : not able to SignOut");
                throw error;
			}
			else{
				user.set(false);
				goto("./");
				alert("Logged out");
			}
		}catch(err){
			console.log(err);
			alert(err.message || err.error_description);
		}
	}
	console.log("Any user connected : " , $user);
</script>

<div class="flex flex-col justify-center">
	<div class ="flex flex-row justify-center">
		<img src="../../static/LOGO.svg" class="logo" alt="logo" on:click|preventDefault = {redirectToHome}>	
	</div>
	<nav class="wrapper-navbar flex flex-row justify-center">
		<button class= "menuicon-findatable menu-rect">
			<a href="../contact" class="text-top-bar">
				CONTACT US
			</a>
		</button>
		<button  class = "menuicon-findatable menu-rect" >
			<a href="../book" class="text-top-bar">
				FIND A TABLE
			</a>
		</button>
		<button  class = "menuicon-findatable menu-rect">
			<a href="../menu" class="text-top-bar">
				MENUS 
			</a>	
		</button>	
		{#if !$user}
			<button  class = "menuicon-findatable menu-rect">
				<a href="../login" class="text-top-bar">
					LOGIN 
				</a>	
			</button>
		<!--{:else}
			<button  class = "menuicon-findatable menu-rect">
				<a href="../profile" class="text-top-bar">
					PROFILE
				</a>	
			</button>-->
		{/if}

	</nav>
</div>

<slot/>
<footer class="wrapper-footer flex flex-column justify-center">
	<!--<div>
		<Auth/>
	</div>-->
	<div class="first-level">
		<div class="wrapper-social-img flex flex-row justify-evenly">
			<img src="../../static/fb-icon.svg" alt="facebook logo" class="fb-logo"/>
			<img src="../../static/insta-icon.svg" alt="instagram logo" class="insta-logo">
			<img src="../../static/trip-icon.png" alt="tripadvisor logo" class="tripadv-logo"/>
		</div>
		<div class="second-level">
			<div class="wrapper-info flex flex-row justify-center">
				<a href="#something" class="address"> 15, Les Linandes Orange, Cergy, Ile de France, 95100 </a>
			</div>
		</div>
		<div class="flex flex-row justify-center log-out-button">	
			{#if $user}<botton class = "log-out-botton text-center" on:click|preventDefault = {handleLogOut}> Logout </botton>{/if}
		</div>
	</div>
</footer>

<style>
	.logo{
		margin-top:2%;
		width:15%;
		height:15%;
	}
	.wrapper-navbar{
		column-gap: 10%;
		margin-top: 3%;
		margin-bottom: 5%;
	}

/*
	.wrapper-navbar {
		position:-webkit-sticky;
		position:sticky;
		top:0px;
        margin-right: 0px;       
        display: inline-block;
        flex-direction: row flex;
        width:100%;
        justify-content: flex-end;
		z-index:10;
    } 
    .menu-rect{
        padding:auto;
        size:auto;
        width:50%;
        height:100%;
        color:rgb(53, 50, 68);
        margin:auto;
		background-color: rgb(250, 246, 244);
    }*/
	/*
    .menuicon-findatable {
        border-color: rgb(250, 246, 244);
        border-width: auto;
        border-style: solid;
        padding: auto;
        text-decoration: none;
		border-radius: 7%;
        float:left;
        margin:auto;
    }
    .menuicon-findatable {
        width: 184px;
        height: 58px;
        display: block;
        display: inline-flex;
        border-color: rgb(53, 50, 68);
        border-width: 2px;
        border-style: solid;
        padding: 22px 21px 21px;
        float: right;
        position: sticky;
        text-decoration: none;
    }
	.text-top-bar{
		color: rgb(3, 4, 26);
	}*/
	/*
	.bottom-image-wrapper{
		display:flex;
		flex-flow:row flex;
		justify-content:center;
	}
	.img-bottom{
		mix-blend-mode: difference ;
		background-blend-mode: hard-light ;
		border-radius: 7%;
	}
	*/
	.text-top-bar{
		color: #7898b8;
		/*We have to choose the right fonts and styles here*/
	}
	.wrapper-footer{
		row-gap: 100%;
		background-color: #ffffff;
	}
	.wrapper-social-img{
		margin-top: 5%;
		margin-bottom: 5%;
	}

	.fb-logo{
		width: 6%;
		height: 6%;
		padding-top: 4%;
	}

	.tripadv-logo{
		border-radius: 7%;
		width: 4%;
		height: 4%;
		padding-top: 5%;
	}

	.insta-logo{
		width: 4%;
		height: 4%;
		padding-top: 5%;
	}

	.wrapper-info{
		margin-top: 5%;
		margin-bottom: 10%;
	}

	.address{
		color: #7898b8; 
		font-family: 'Playfair Display', serif;
		font-weight: 400;
		font-style:italic;
		font-size: 17px;
	}

	.log-out-botton{
		color: #7898b8; 
		font-family: 'Playfair Display', serif;
		font-weight: 400;
		font-style:italic;
		font-size: 17px;
		padding-bottom: 5%;
	}
</style>