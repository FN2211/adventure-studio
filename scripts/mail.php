<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $role = htmlspecialchars($_POST["subject"]);

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try {
        // SMTP Server konfigurieren
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'adv.st.mail@gmail.com';  // Deine Gmail-Adresse
        $mail->Password = 'qsfh ejyq oxzb koaj';  // Dein Gmail-Passwort
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // E-Mail Absender und Empfänger
        $mail->setFrom('support@adventure-studio.eu', 'Adventure Studio');
        $mail->addAddress("$email");  // Empfänger

        // E-Mail-Inhalte
        $mail->isHTML(true);
        $mail->Subject = "Anfrage als: $role von $name";
/*         $mail->Body    = "Name: $name\n";
        $mail->Body   .= "E-Mail: $email\n"; */
        $mail->Body   = "$message";

        // E-Mail senden
        $mail->send();
        
        header("Location: ../thankyou.html");
    } catch (Exception $e) {
        /* echo "Fehler: {$mail->ErrorInfo}"; */
    }
} else {
    /* echo "Ungültige Anfrage."; */
}
?>