<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

error_log("[" . date('H:i:s') . "]" . " Eingehende Anfrage\n", 3, "./debug.log");

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_log("[" . date('H:i:s') . "]" . " Anfrage ist gültig\n", 3, "./debug.log");

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $role = htmlspecialchars($_POST["subject"]);

    error_log("[" . date('H:i:s') . "]" . " Anfragen Inhalt: $name $email $message $role\n", 3, "./debug.log");

    if (file_exists('vendor/autoload.php')) {
        require 'vendor/autoload.php';
    } else {
        error_log("[" . date('H:i:s') . "]" . " FEHLER: vendor/autoload.php kann nicht gefunden werden!\n\n\n", 3, "./debug.log");
    }

    $mail = new PHPMailer(true);


    error_log("[" . date('H:i:s') . "]" . " Vor try\n", 3, "./debug.log");
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
        $mail->addAddress('support@adventure-studio.eu');
        error_log("[" . date('H:i:s') . "]" . " Email Empfänger festgelegt!\n", 3, "./debug.log");

        // E-Mail-Inhalte
        $mail->isHTML(true);
        $mail->Subject = "Anfrage als: $role von $name";
        $mail->Body   = "$message";
        error_log("[" . date('H:i:s') . "]" . " Email Inhalt generiert!\n", 3, "./debug.log");

        // E-Mail senden
        $mail->send();
        error_log("[" . date('H:i:s') . "]" . " Email gesendet!\n", 3, "./debug.log");
        
        header("Location: ../thankyou.html");
        error_log("[" . date('H:i:s') . "]" . " Anfrage erfolgreich!\n\n\n", 3, "./debug.log");
    } catch (Exception $e) {
        error_log("[" . date('H:i:s') . "]" . " FEHLER: {$mail->ErrorInfo}", 3, "./debug.log");
        /* echo "Fehler: {$mail->ErrorInfo}"; */
    }
    error_log("[" . date('H:i:s') . "]" . " Nach try\n", 3, "./debug.log");
} else {
    error_log("[" . date('H:i:s') . "]" . " Ungültige Anfrage\n\n\n", 3, "./debug.log");
    /* echo "Ungültige Anfrage."; */
}
?>