<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Wenn du Composer verwendest

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
    $mail->setFrom('adv.st.mail@gmail.com', 'no-reply');
    $mail->addAddress('fynnreckers@gmail.com');  // Empfänger

    // E-Mail-Inhalte
    $mail->isHTML(true);
    $mail->Subject = 'Test E-Mail';
    $mail->Body    = 'Dies ist eine Testnachricht';

    // E-Mail senden
    $mail->send();
    echo 'Die Nachricht wurde gesendet';
} catch (Exception $e) {
    echo "Fehler: {$mail->ErrorInfo}";
}
?>