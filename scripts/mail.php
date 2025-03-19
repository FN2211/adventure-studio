<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $role = htmlspecialchars($_POST["subject"]);

    $to = "fynnreckers@gmail.com";  // Hier deine E-Mail-Adresse eintragen
    $subject = "Antrag als $role von $name";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $email_body = "Name: $name\n";
    $email_body .= "E-Mail: $email\n";
    $email_body .= "Nachricht:\n$message\n";

    // E-Mail senden
    if (mail($to, $subject, $email_body, $headers)) {
        echo "E-Mail erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der E-Mail.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>