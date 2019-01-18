



<?php include("file:///C|/xampp/htdocs/Projektblogg - kopia/TjejerSomLyfter/Src/header.php");?>


	
<img src="file:///C|/xampp/htdocs/Projektblogg - kopia/TjejerSomLyfter/Src/images/banner.png" alt="bannerbild" id="banner" height="350" width="950" >



<div class="wrapper">    
<div class="flik"> 
	<p class="fliktext">Mode</p>
	<hr id="mode">
</div>



<div class="sidebar">
	<h2> Senaste inlägg</h2>
	<table class="posted"><th>Namn</th> 
		<br />
		<th>meddelande</th>
	<th>skapad</th></table>
</div>
</div>	




<div class="wrapper">
<div class="flik"> 
	<p class="fliktext">Träning</p>
	<hr id="workout">
</div>



	<div class="sidebar">
	<h2> Senaste inlägg</h2>
	<table class="posted"><th>Namn</th> 
		<br />
		<th>meddelande</th>
	<th>skapad</th></table>
</div>
</div>






		<div id="search">
			
				<input  type="text" name="message" class="txt1" placeholder="Sök här..."/><br />
		<button class="post"> sök</button>
</div>
		
	<div id="message">
	
		<input  type="text" name="username" class="txt" id="username" placeholder="användarnamn"/><br />
		<span id="emailerrorlogin"> <?php //echo $usernameErrorlogin; ?> </span>
		
		<input  type="password" name="password" class="txt" id="password" placeholder="lösenord"/><br />
		<span id="passerrorlogin"> <?php// echo $passErrorlogin; ?> </span>
		
		
		<button id="login"> Logga in</button>
		<a href="file:///C|/xampp/htdocs/Projektblogg - kopia/TjejerSomLyfter/Src/register.php"><button id="register"> Registrera dig</button></a>
	
	
	</div>

</div> <!--container-->



<?php include("file:///C|/xampp/htdocs/Projektblogg - kopia/TjejerSomLyfter/Src/footer.php");?>
<script src="file:///C|/xampp/htdocs/Projektblogg - kopia/TjejerSomLyfter/Src/js/main1.js" type="text/javascript"></script>
</body>


</html>