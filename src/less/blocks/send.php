<?php
$lastname = $_POST['lastname'];
$firstname = $_POST['firstname'];
$familyname = $_POST['familyname'];
$university = $_POST['university'];
$telephone = $_POST['telephone'];
$team = $_POST['team'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$lastname = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("alina-novikova@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>