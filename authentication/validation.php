<?php
session_start();

$connection=mysqli_connect('localhost','root','');
mysqli_select_db($connection,'web');

$name=$_POST['username'];
$password=$_POST['password'];

$select="select * from quizland where name='$name' && password='$password'";
$result=mysqli_query($connection,$select);
$num=mysqli_num_rows($result);
$row = mysqli_fetch_array($result);
if($num==1)
{
    $_SESSION['user']=$name;
    $_SESSION['email']=$row['email_id'];
    $_SESSION['fullname']=$row['fullname'];
    $_SESSION['pno']=$row['pno'];
    header('location:../home/home.php');
}
else
{
    echo '<script>alert("user name or password !")</script>';
    header( "refresh:0; url=login.php" ); 
}
?>