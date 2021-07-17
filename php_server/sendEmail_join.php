<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '\vendor\phpmailer\phpmailer\src\Exception.php';
require_once __DIR__ . '\vendor\phpmailer\phpmailer\src\PHPMailer.php';
require_once __DIR__ . '\vendor\phpmailer\phpmailer\src\SMTP.php';

// passing true in constructor enables exceptions in PHPMailer

switch($_SERVER['REQUEST_METHOD']){
case("OPTIONS"): //Allow preflighting to take place.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,OPTIONS");
header("Access-Control-Allow-Headers: content-type");
exit;
case("POST"): 


$mail = new PHPMailer(true);

if(isset($_POST["email"])){
    $email=$_POST["email"];
}
if(isset($_POST["name"])){
    $name=$_POST["name"];
}
if(isset($_POST["message"])){
    $message=$_POST["message"];
}
if (isset($_FILES['cv']) &&
    $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['cv']['tmp_name'],
                         $_FILES['cv']['name']);
}

if (isset($_FILES['lettre']) &&
    $_FILES['lettre']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['lettre']['tmp_name'],
                         $_FILES['lettre']['name']);
}

$subject = "Candidature de $name.";

$recipient = 'support@dotnet-services.fr';


try {
 // Server settings
$mail->SMTPDebug = SMTP::DEBUG_CONNECTION; // for detailed debug output
$mail->isSMTP();
$mail->Host = 'mail42.lwspanel.com';
$mail->SMTPAuth = true;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
);
$mail->Username = 'support@dotnet-services.fr'; // YOUR  email
$mail->Password = 'Ee214627yz$'; // YOUR  password

    // Sender and recipient settings
    $mail->setFrom($recipient, $name);
    $mail->addAddress($recipient, 'Dotnet Services');
    $mail->addReplyTo($email, $name); // to set the reply to

    // Setting the email content
    $mail->IsHTML(false);
    $mail->Subject = $subject;
    $mail->Body = "<div>$message</div>";
    $mail->AltBody = $message;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo "Email message sent.";
    } catch (Exception $e) {
    echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
    }

    break;
    default: //Reject any non POST or OPTIONS requests.
    header("Allow: POST", true, 405);
    exit;
    }