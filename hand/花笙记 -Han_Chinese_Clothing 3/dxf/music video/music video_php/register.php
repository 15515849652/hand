<?php
$dsn = "mysql:host=localhost;dbname=huasheng_clothe;port=3306";
$user = "root";
$pwd1 = "root";


$pdo = new PDO($dsn,$user,$pwd1);

$name = $_POST['name'];
$pwd = $_POST['pwd'];
// echo $name,$pwd;

$sql = "insert into user_login values(default,'$name','$pwd')";

$res = $pdo->exec($sql);

echo $res;
// print_r($res);
// if($res){
// 	echo '<span style="color:green">注册成功</span>';
// }else{
// 	echo '<span style="color:red">注册失败</span>';
// }