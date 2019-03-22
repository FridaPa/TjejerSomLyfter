//klientsidan som använder webbtjänsten service.php
//av: Frida Pastak
//Mittuniversitetet
"use strict";

//hämtar URL ADRESSEN TILL WEBBTJÄNSTEN
var URL = "http://localhost/Projektbloggkopia/TjejerSomLyfter/Pub/service.php/livsstil/";
var URL2 = "http://localhost/Projektbloggkopia/TjejerSomLyfter/Pub/service.php/workout/";
//var URL = "http://studenter.miun.se/~frpa1600/writeable/dt173g/Pub/service.php/livsstil/";

//var URL2 = "http://studenter.miun.se/~frpa1600/writeable/dt173g/Pub/service.php/workout/";
document.addEventListener("DOMContentLoaded", function(){ // Wait for DOM tree to get parsed
	

	
	///////////////////////////////////////////////////////////////////////////////////////////
      //hämta alla inlägg från table workout
	
	
	var xmlhttp = new XMLHttpRequest();

	//en funktion som ska utföras när förfrågan GET får ett svar.
xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
			   
                  //hämtar jsonarray fr servern och gör om till js genom parse()
               var jsonData = JSON.parse( xmlhttp.responseText);
                for(var i=0; i <jsonData.length; i++){

                   document.getElementById("posted").innerHTML += "<div class='inlagg'> <p class='author'>Postat av: " + jsonData[i].name + "</p><p class='authormessage'>" + jsonData[i].message+ "</p><p class='created'>" + jsonData[i].created + "</p></div>";   
					
				}
		   }
           else if (xmlhttp.status == 400) {
              alert('error 400');
           }
           else {
               alert('error 200');
           }
        }
};
	
	
xmlhttp.open("GET",URL, true); 
    xmlhttp.send();
   
	
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//nytt naman på vårt ajax anrop eftersom vi har flera GET metoder. Här hämtas all inlägg från table livsstil
	
	

	var xmlhttp2 = new XMLHttpRequest();
	
	
xmlhttp2.onreadystatechange = function() {
        if (xmlhttp2.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp2.status == 200) {
			   
                  //hämtar jsonarray fr servern och gör om till js genom parse()
               var jsonData = JSON.parse( xmlhttp2.responseText);
                for(var i=0; i <jsonData.length; i++){

                   document.getElementById("posted2").innerHTML += "<div class='inlagg'> <p class='author'>Postat av: " + jsonData[i].name + "</p><p class='authormessage'>" + jsonData[i].message+ "</p><p class='created'>" + jsonData[i].created + "</p></div>";   
				}
		   }
           else if (xmlhttp2.status == 400) {
              alert('error 400');
           }
           else {
               alert('error 200');
           }
        }
};
	
	//annan url för annnan table
xmlhttp2.open("GET",URL2, true); 
    xmlhttp2.send();
                                               
	
	
	
	
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
	// hämtar alla inlägg för table workout i annan design för annat fönster 
	
	
	
	var xmlhttp3 = new XMLHttpRequest();
	

xmlhttp3.onreadystatechange = function() {
        if (xmlhttp3.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp3.status == 200) {
			   
                  //hämtar jsonarray fr servern och gör om till js genom parse()
               var jsonData = JSON.parse( xmlhttp3.responseText);
                for(var i=0; i <jsonData.length; i++){

                   document.getElementById("workoutposts").innerHTML += "<div class='inlaggworkout'> <p class='author'>Postat av: " + jsonData[i].name + "</p><p class='authormessage'>" + jsonData[i].message+ "</p><p class='created'>" + jsonData[i].created + "</p><p><button class='deletebutton2' id='"+jsonData[i].id+"'>Radera inlägg"+jsonData[i].id+"</button></div>";   
					
				}
		   }
           else if (xmlhttp3.status == 400) {
              alert('error 400');
           }
           else {
               alert('error 200');
			 
           }
        }
};
	
	
xmlhttp3.open("GET",URL2, true); 
    xmlhttp3.send();
   
	
	
	
	

	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////
	
	//postar inlägg i workout-tabellen

	
	
	 // POST
   document.getElementById("writebutton").addEventListener("click", function(){
        let message = document.getElementById("messageid").value;
        let name = document.getElementById("name").value;
		
		if( message == '' || name == '')   {
		
			location.reload(); 
	
		}else{        
       // if (message == "" || name == "" ) location.reload(); 

		   //om man inte skrivit in ngt, om det inte är '' en sträng.  ladda bara om sidan
		let json =  {"message": message, "name": name};  // skapa js obj med infon
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", URL2, true); // AJAX ANROP MED metoden post
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send( JSON.stringify(json));// skickar json till servern via ajax som gör om den till en assoc
	xmlhttp.onload = function() {
				
			location.reload();
       };
	}
  }); 


	
	
		
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	// ta bort inlägg ut table WORKOUT
	

	 // - DELETE
    document.getElementById("workoutposts").addEventListener("click", function(ev){ 
        var http = new XMLHttpRequest(); //genom xmlhttprequest kan ja göra AJAX anrop som behövs för att komma åt webbtjänsterna via JS.
        http.open("DELETE", URL2 +"/"+ev.target.id, true); 
      
        http.send(); //ajax anrop med metoden send
		
        http.onload = function() { //väntar på att funktionen ska avsluta
			
        location.reload(); //sedn ladda om sidan med ny version
        }
		
        
    })

	
}); 


