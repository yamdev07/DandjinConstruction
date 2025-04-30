<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $to = "contact@dandjin.com"; // remplace avec ton email
    $subject = "Nouveau message de $name depuis le site Dandjin";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: merci.html");
        exit();
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
    
}
?>
