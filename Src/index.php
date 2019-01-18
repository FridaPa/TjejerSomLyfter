



<?php include("header.php");?>


	
<img src="images/banner.png" alt="bannerbild" id="banner" height="350" width="950" >



<div class="wrapper">    
<div class="flik"> 
	<p class="fliktext"> Senaste inlägg - Livsstil</p>
	<hr id="mode">
</div>



	
<div class="sidebar">
	
<!--div där inläggen fr databas med tabellen workout ska hamna-->
<div id="posted"> </div>
	
</div>	

</div>


<div class="wrapper">
<div class="flik"> 
	<p class="fliktext"> Senaste inlägg - Träning</p>
	<hr id="workout">
</div>



	<div class="sidebar">
		
	<!--div där inläggen fr db med tabellen livsstil ska hamna-->
		<div id="posted2">  </div>
</div>
</div>






		<div id="search">
			
				<input  type="text" name="message" class="txt1" placeholder="Sök här..."/><br />
		<button class="post"> sök</button>
</div>
		
	<div class="message">
	
		<input  type="text" name="username" class="txt" id="username" placeholder="användarnamn"/><br />
		<span id="emailerrorlogin">  </span>
		
		<input  type="password" name="password" class="txt" id="password" placeholder="lösenord"/><br />
		<span id="passerrorlogin"> </span>
		
		
		<button id="login"> Logga in</button>
		<button id="register"> Registrera dig</button>
	
	
	</div>
	<div class="message">
		
	<p class="justnu">  Nytt idag:</p>
		<hr>
		<ul> 
			<li class="nytt">604 inlägg</li>
			<li class="nytt">13 medlemmar</li>
			<li class="nytt"> 9 ämnen</li>
		</ul>
		
	
	
	</div>


</div> <!--container-->



<?php include("footer.php");?>
<script src="js/main1.js"></script>
</body>


</html>