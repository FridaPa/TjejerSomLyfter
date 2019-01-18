<?php include("header.php");?>


	
<img src="images/banner.png" alt="bannerbild" id="banner" height="350" width="950" >




<div class="wrapper2">
<div class="flik2"> 
	<p class="fliktext">Livsstil</p>
	<hr id="workout">
</div>

<div class="posts">
	<!--div där alla poster fr workout ska vara-->
	<div id="livsstilposts"></div>

		
	
	<input  type="text" name="message" class="write" id="messageid" placeholder="Skriv nytt inlägg..."/><br />
	<input  type="text" name="name" class="writename" id="name" placeholder="Ditt namn..."/><br />
	<button name="livsstilbutton" id="livsstilbutton"> Posta</button>
	
	
</div>
		

</div>







		<div id="search">
			
				<input  type="text" name="messagemess" class="txt" placeholder="Sök här..."/><br />
		<button class="post"> sök</button>
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
<script src="js/livsstil.js" ></script>
</body>


</html>