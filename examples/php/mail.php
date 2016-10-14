<?php
	$name = $_POST['form-name'];
	$sname = $_POST['form-sname'];
	$email = $_POST['form-email'];
	$message = $_POST['form-area'];
	$formcontent=" From: $name \n $sname \n Message: $message";
	$recipient = "i@tamelos.com";
	$subject = "Contact Form";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>