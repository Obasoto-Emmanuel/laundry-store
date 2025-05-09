<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ownerEmail = "patersmilescleaningservices@gmail.com";
    $userEmail = $_POST['email'] ?? 'noemail@domain.com';
    $name = htmlspecialchars($_POST['name']);
    $address = htmlspecialchars($_POST['address']);
    $service = htmlspecialchars($_POST['service']);
    $date = htmlspecialchars($_POST['date']);

    $subject = "New Laundry Booking from $name";
    $message = "Booking Details:\n\n" .
               "Name: $name\n" .
               "Email: $userEmail\n" .
               "Address: $address\n" .
               "Service: $service\n" .
               "Date: $date\n";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $userEmail\r\n";

    $sentOwner = mail($ownerEmail, $subject, $message, $headers);
    $sentUser = mail($userEmail, "Your Laundry Booking Confirmation", "Thank you for your order!\n\n" . $message, $headers);

    if ($sentOwner && $sentUser) {
        echo "<script>alert('Booking submitted and emails sent!'); window.location.href='booking.html';</script>";
    } else {
        echo "<script>alert('Booking failed to send. Try again later.'); history.back();</script>";
    }
}
?>
