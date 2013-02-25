<?php

// Minor modifications from Contactable plugin
// Contactable link: http://theodin.co.uk/blog/ajax/contactable-jquery-plugin.html 

$name = stripcslashes($_POST['name']);
$email = stripcslashes($_POST['email']);
$msg = stripcslashes($_POST['msg']);
$subject = stripcslashes($_POST['subject']);	
$contactMessage =  
"Message:
		
	$msg

	Name: $name
	E-mail: $email
	Subject: $subject

	Sending IP:$_SERVER[REMOTE_ADDR]
	Sending Script: $_SERVER[HTTP_HOST]$_SERVER[PHP_SELF] \r\n";

mail('darthlukan@gmail.com', $subject, $contactMessage);
// Send the user back to the page
//header('Location: http://brianctomlinson.com/#contact');
?>