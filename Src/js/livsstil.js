// JavaScript Documen/klientsidan som använder webbtjänsten service.php
//av: Frida Pastak
//Mittuniversitetet
"use strict";

//hämtar URL ADRESSEN TILL WEBBTJÄNSTEN
var URL = "http://localhost/Projektbloggkopia/TjejerSomLyfter/Pub/service.php/livsstil/";

//var URL = "http://studenter.miun.se/~frpa1600/writeable/dt173g/Pub/service.php/livsstil/";


document.addEventListener("DOMContentLoaded", function(){ // Wait for DOM tree to get parsed
	

	
	
	
		//////////////////////////////////////////////////////////////////////////////////////////////
	
	//hämtar alla inlägg från table livsstil i annan design i annat fönster
	
  var xmlhttp4 = new XMLHttpRequest();
	

xmlhttp4.onreadystatechange = function() {
        if (xmlhttp4.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp4.status == 200) {
			   
                  //hämtar jsonarray fr servern och gör om till js genom parse()
               var jsonData = JSON.parse( xmlhttp4.responseText);
                for(var i=0; i <jsonData.length; i++){

                   document.getElementById("livsstilposts").innerHTML += "<div class='inlaggworkout'> <p class='author'>Postat av: " + jsonData[i].name + "</p><p class='authormessage'>" + jsonData[i].message+ "</p><p class='created'>" + jsonData[i].created + "</p><p><button class='deletebutton2' id='"+jsonData[i].id+"'>Radera inlägg"+jsonData[i].id+"</button></div>";   
				}
		   }
           else if (xmlhttp4.status == 400) {
              alert('error 400');
           }
           else {
               alert('error 200');
           }
        }
};
	
	
xmlhttp4.open("GET",URL, true); 
    xmlhttp4.send();
                                      
	
	
		
	//////////////////////////////////////////////////////////////////////////////////////////
	
	//postar inlägg i LIVSSTIL tabellen

	
	
	 // POST
 document.getElementById("livsstilbutton").addEventListener("click", function(){
        var message = document.getElementById("messageid").value;
        var name = document.getElementById("name").value;
        if (message == '' || name == '' ){   

		location.reload(); 
	} else {  
		  
		   //om man inte skrivit in ngt, om det inte är '' en sträng.  ladda bara om sidan
		var json =  {"message": message, "name": name};  // skapa json obj med infon
        var xmlhttp7 = new XMLHttpRequest();
        xmlhttp7.open("POST", URL, true); // AJAX ANROP MED metoden post
        xmlhttp7.setRequestHeader('Content-Type', 'application/json');
        xmlhttp7.send( JSON.stringify(json));// skickar json till servern via ajax som gör om den till en assoc

        xmlhttp7.onload = function() {
			location.reload();
       };
		
	}		
  });
	
	

		
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	// ta bort inlägg ut table LIVSSTIL
	

	 //  DELETE
    document.getElementById("livsstilposts").addEventListener("click", function(ev){ 
        var http = new XMLHttpRequest(); //genom xmlhttprequest kan ja göra AJAX anrop som behövs för att komma åt webbtjänsterna via JS.
        http.open("DELETE", URL + "/"+ev.target.id, true); 

        http.send(); //ajax anrop med metoden send
		
        http.onload = function() { //väntar på att funktionen ska avsluta
         location.reload(); //sedn ladda om sidan med ny version
        };
		
        
    });
	

	

	
}); 


