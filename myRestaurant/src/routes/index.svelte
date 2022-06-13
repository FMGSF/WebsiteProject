<svelte:head>
	<title>Home</title>
</svelte:head>


<div class="wrapper flex flex-wrap flex-row text-center font-bold">
	<section class="first blocks">
		<div class="wrapper-block-1 flex flex-wrap flex-row text-center font-bold justify-center">		
			<h1 class = "catch-phrase">
				Il Gusto Locale
			</h1>
		</div>
	</section>

	<section class="second blocks">
		<div class="wrapper-block-2 flex flex-wrap flex-row text-center font-bold justify-center">
			<div class="txt-block-2">
				<p class = "text-second-block">
					At Cascia, Italian gastronomy is expressed in all its grandeur and generosity. This cuisine is driven by the values of sharing and product quality.  <br> Depending on the season, Cascia gives pride of place to solar cuisine and offers essential classics – margherita pizza, vitello tonnato, beef carpaccio, linguine alle vongole, grilled octopus, Milanese veal cutlet…
					Sharing and seasonal products are the pillars of the menu which offers a window on the hilly lands of Tuscany to the dry seashores of Puglia.  <br> Designed as a beach house, Cascia is an extraordinary destination that offers many services and activities.
				</p>
			</div>
			<div class="img-block-2">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src="https://gigi-restaurant.com/wp-content/uploads/2021/11/CUCINA-683x1024.jpg" alt="Image of our good food" class="img-block2">
			</div>	
		</div>
	</section>

	<section class="second-and-half-blocks">
		<div class="flex flex-col justify-center">
			<p class="whatcustomers">
				WHAT OUR CUSTOMERS SAY
			</p>
			<div class="boxreview flex flex-col justify-center">
				<div>
					<p class="reviewer">
						so2much
					</p>
				</div>
				<div class="flex flex-row justify-center">
					<img src="../../static/edits/svg/fivestars.svg" class="fivestars" alt="fivestars">
				</div>
				<p class="reviewdate">
					March 18
				</p>
				<p class="review">
					"Great food, lovely presentation, attentive service and comfortable accommodation"
				</p>					
			</div>
			<div class="flex flex-row justify-center">
				<img src="../../static/edits/svg/buildingsreal.svg" class="buildings" alt="buildings">	
			</div>
		</div>
	</section>

	<section class="third blocks">
		<div class="wrapper-block-3 flex flex-wrap flex-row text-center font-bold justify-center">		
				<div class="block-3-menu-image-1">
					<a href="../menu" class="menu-link">
						<p class="boxesunderpics">
							LUNCH AND DINNER
						</p>
						<img src="../../static/fooddisplayone.png" alt="menu visualize" class="menu-img-blck-3">
					</a>			
				</div>
				<div class="block-3-menu-image-2">
					<a href="../menu" class="menu-link">
						<p class="boxesunderpics">
							WINES AND BEVERAGES
						</p>
						<img src="../../static/fooddisplaytwo.png" alt="menu visualize" class="menu-img-blck-3">
					</a>
				</div>
				<div class="block-3-menu-image-3">
					<a href="../menu" class="menu-link">
						<p class="boxesunderpics">
							AFTERNOON TEA
						</p>
						<img src="../../static/fooddisplaythree.png" alt="menu visualize" class="menu-img-blck-3">
					</a>
				</div>
		</div>
	</section>
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
	.blocks {
		width:100%;
		height:100%;
	}
	.wrapper-block-1 {
        width:100%;
		height:100%;
		background-image: url(https://gigi-restaurant.com/wp-content/uploads/2021/12/Gigi-Val-dIsère@RomainRicard-17.jpg);
		background-size: cover;
        background-position: center;
		z-index:6;
    }
	.catch-phrase{
		color: white;
		font-family:"Better Grade";
		margin-top:25%;
		margin-bottom: 20%;
		font-size: 1000%;
		flex-basis: 100%;
		flex-shrink: 3;
	}
	.wrapper-block-2{
		background-image: url("../../static/edits/svg/threelines.svg");
		background-size:cover;
		width:100%;
		height:100%;
	}
	.txt-block-2{	
		margin-top:25%;
		margin-bottom:25%;
		font-style: normal;
		width:20%;
		height:70%;
		position:relative;
		font-family: 'Playfair Display';
		font-weight: bold;
		font-size: 17px;
	}

	.text-second-block{
		color:#6a85a2;
		font-family: "Playfair Display",serif;
		font-style: italic;
		font-weight:600;
    	font-size: 17px;
	}

	.second-and-half-blocks{
		background-color:#6a85a2;
		width:100%;
		height:100%;
	}
	.whatcustomers{
		position: relative;
		color: #ffffff;
		font-family: "Playfair Display";
		font-weight:300;
    	font-size: 44px;
    	letter-spacing: 5px;
		padding-top: 5%;
		padding-bottom: 5%;
	}

	.boxreview{
		background-color: #6a8aaa;
		margin-left:10%;
		margin-right:10%;
		padding-bottom: 2%;
	}

	.reviewer{
		position: relative;
		padding-top: 5%;
		color: #ffffff;
		font-family: "Playfair Display",serif;
		font-weight: 100;
    	font-size: 17px;
		margin-top: 3%;
		margin-bottom:3%;
	}

	.fivestars{
		width: 10%;
		height: 10%;
		padding-top: 0%;
		padding-bottom: 3%;
	}

	.reviewdate{
		position: relative;
		color: #ffffff;
		font-family: "Playfair Display",serif;
		font-weight:100;
    	font-size: 17px;
		margin-top:0%;
		margin-bottom:3%;
	}

	.review{
		position: relative;
		color: #ffffff;
		font-family: "Playfair Display",serif;
		font-style: italic;
		font-weight:100;
    	font-size: 17px;
		padding-top:3%;
		padding-bottom: 5%;
	}

	.buildings{
		width:30%;
		height:30%;
		padding-bottom: 1%;
		padding-top: 2%;
	}

	.img-block2{
		display: inline-flexbox;
		margin-top:45%;
		margin-bottom:45%;
		width:60%;
		height:50%;
		position:relative;
		float:right;
		border-radius: 7%;		
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
