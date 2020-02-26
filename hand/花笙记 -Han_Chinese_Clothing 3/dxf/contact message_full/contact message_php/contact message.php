<?php
$dsn = "mysql:host=localhost;dbname=huasheng_clothe;port=3306";
$user = "root";
$pwd1 = "root";


$pdo = new PDO($dsn,$user,$pwd1);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];

// echo $name,$email;
$sql = "insert into info_stock (Id,name,email,phone,message) VALUES ('default','$name','$email','$phone','$text')";

$res = $pdo->query($sql);

echo $res;