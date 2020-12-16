<?php 


	if (isset($_POST['email'])) {
		$customer_name = $_POST['name'];
		$customer_email = $_POST['email'];
		$customer_phone_number = $_POST['phoneNumber'];
		$references = $_POST['urls'];
		$message = $_POST['message'];



		$subject_type = "New Contact";


		$to = "rafaelsilva@northnerds.com";

        $email_body = "Customer Name: " .$customer_name. "\n\n" .
                            "Customer Email: " .$customer_email. "\n\n" .
                                "Customer Phone Number: " .$customer_phone_number. "\n\n" . 
                                    "Reference URLs: ". $references. "\n\n". 
                                        "Message: " .$message. "\n\n";

		$headers = "Reply To: " .$customer_email. "\r\n";
	

		mail($to, $subject_type, $email_body, $headers);

		header("Location: index.html");


	}
	


?>