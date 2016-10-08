<?php
if($_POST)
{
	$to_email	= "john.doe@exmaple.com"; //Recipient email, Replace with own email here
	$subject	="***Enquiry from john.doe@exmaple.com***";
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
    } 
	
	//Sanitize input data using PHP filter_var().
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$phone_number	= filter_var($_POST["phone_number"], FILTER_SANITIZE_NUMBER_INT);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
	
	//email body
	$message_body = $message."\r\n\r\n-".$user_name."\r\nEmail : ".$user_email."\r\nPhone Number : (".$country_code.") ". $phone_number ;
	
	//proceed with PHP email.
	$headers = 'From: '.$user_name.'' . "\r\n" .
	'Callback: '.$phone_number.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
}
?>