<?php
$dsn="mysql:host=localhost;dbname=huasheng_clothe;port=3306";
$user="root";
$pwd1="root";

$pdo = new PDO($dsn,$user,$pwd1);

$name = $_POST["name"];
// echo $name;
$sql = "select user_name from user_login where user_name='$name' limit 1";
// echo $sql;
$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);