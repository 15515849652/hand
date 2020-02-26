<?php
$dsn = "mysql:host=localhost;dbname=huasheng_clothe;port=3306";
$user = "root";
$pwd1 = "root";

$pdo = new PDO($dsn,$user,$pwd1);

$name = $_POST['name'];
$pwd = $_POST['pwd'];
$sql = "select * from user_login where user_name='$name' and user_password='$pwd'";

$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);