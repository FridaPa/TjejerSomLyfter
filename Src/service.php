


<?php

/*
WEBBTJÄNSTEN SERVICE.PHP
Av: Frida Pastak
Webbutveckling III
Mittuniversitetet

*/


// ------------------------------------------
//Allmänna förinställningar för webbtjänsten
//---------------------------------------------





// Get HTTP method, path and input of the request
$method = $_SERVER['REQUEST_METHOD'];


// ett sätt att analysera sökvägar för webbadressen som tjänsten kallas för.
//$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
//$pi= (isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '');
//$request = explode("/", substr($pi,1));

$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


//json_decode tar jsondata och gör till php variabel
//skickar json till servern via json_decode som gör om den till en assoc OM true
//To receive RAW post data in PHP, you can use the php://input stream
$input = json_decode(file_get_contents('php://input'), true);



// Send return header information
header("Content-Type: application/json; charset=UTF-8"); //charset=UTF-8
header("Access-Control-Allow-Methods: GET, POST");

//ansluter till databasen
$conn = mysqli_connect("localhost","fridapp","password","forum") or die("Error connecting to database.");
$db_connected = mysqli_select_db($conn, "forum"); //arbeta med DB forum 


//om det är från table livsstil
if($request[0] == "livsstil"){ 
	switch ($method) {
			//posta inlägg - POST
		case "POST":
		     $sql = "INSERT INTO livsstil (name, message) VALUES ('" . $input['name'] . "', '" . $input['message'] ."' )";
              mysqli_query($conn, $sql);
             break;
		
		case "GET":
	  //hämta senate inlägg ur kategori livsstil och workout - GET
			$sql = "SELECT id, message, name, created FROM livsstil";
			if(isset($request[1])) $sql = $sql . " WHERE ID = " . $request[1] . ";";
			
				// Always response with json array of cars except for GET /cars/id
	$result = mysqli_query($conn,$sql) or die(mysqli_error($conn));
			
	 $livsstil = [];
	if($method != "GET") 
		$sql = "SELECT id, name, message, created FROM livsstil";
	
	$result= mysqli_query($conn,$sql) or die(mysqli_error($conn));
    while($row = mysqli_fetch_assoc( $result)){
		    $row_arr['id'] = $row['id'];
			$row_arr['name'] = $row['name'];
			$row_arr['message'] = $row['message'];
		    $row_arr['created'] = $row['created'];
			array_push($livsstil,$row_arr);
		
		
	}  
	
		echo json_encode($livsstil);
	break;	
	
	//ta bort medd -  DELETE
	case "DELETE":
   		    $sql = "DELETE FROM livsstil WHERE id = " . $request[1] . ";";
	        mysqli_query($conn, $sql);
   		    break;
	
	//uppdatera - PUT
	case "PUT":
		$sql = "UPDATE livsstil SET message = '" . $input['message'] . "', name = '" . $input['name'] . "', created = '" . $input['created'] . "' WHERE id = " . $request[1] . ";";
	    mysqli_query($conn, $sql);
	    break;
	
	}
	
} 





//Om det är fr table workout
else if($request[0] == "workout"){
	switch ($method) {
			
		case "POST":
			$sql = "INSERT INTO workout (name, message) VALUES ('" . $input['name'] . "', '" . $input['message'] . "')";
			//$sql = "INSERT INTO workout (name, message) VALUES ('loppan89', 'wow!' )";
			mysqli_query($conn, $sql);
			break;
			
		case "GET":
		    $sql = "SELECT id, message, name, created FROM workout";
			//skickar jga med ett annat argyment måste jag ha ett ID oxå.
		if(isset($request[1])) $sql = $sql . " WHERE ID = " . $request[1] . ";";
			
		   // mysqli_query($conn, $sql);
			
			// Always response with json array of cars except for GET /cars/id
	$result = mysqli_query($conn,$sql) or die(mysqli_error($conn));
			
			
     $harr = [];
	if($method != "GET") $sql = "SELECT id, message, name, created FROM workout";
	$result = mysqli_query($conn,$sql) or die(mysqli_error($conn));
    while($row = mysqli_fetch_assoc($result)){
		    $row_arr['id'] = $row['id'];
			$row_arr['name'] = $row['name'];
			$row_arr['message'] = $row['message'];
		    $row_arr['created'] = $row['created'];
			 array_push($harr,$row_arr);
		
		
	}
		echo json_encode($harr);	
		
			break;
	        case "DELETE":
            $sql = "DELETE FROM workout WHERE id = " . $request[1] . ";";
			 mysqli_query($conn, $sql);
		
   		    break;
			//uppdatera - PUT - jag valde dock att inte ha med denna. Man får ta bort in lägg och skriva igen, vilket är vanligast.
	        case "PUT":
		    $sql = "UPDATE workout SET message = '" . $input['message'] . "', name = '" . $input['name'] . "', created = '" . $input['created'] . "' WHERE id = " . $request[1] . ";";
	        mysqli_query($conn, $sql);
	        break;
	
		
} 	
	
} 

else {
	http_response_code(404);
	exit();
}




mysqli_close($conn);






//http://studentmysql.miun.se', 'frpa1600', 'CCentrumbanan263?#', 'userlogin'



?>