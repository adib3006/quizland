<?php
session_start();
/*header('location:login.php');*/
$connection=mysqli_connect('localhost','root','');

mysqli_select_db($connection,'web');

$name=$_POST['user'];
$email=$_POST['emailid'];
$password=$_POST['password'];
$fullname=$_POST['fullname'];
$pno=$_POST['pno'];

$select="select * from quizland where email_id='$email'";
$result=mysqli_query($connection,$select);
$num=mysqli_num_rows($result);
if($num==1)
{
    echo '<script>alert("user already exists.!!")</script>';
    header( "refresh:0; url=login.php" );
}
else
{
    $reg="insert into quizland(name,email_id,password,fullname,pno) values('$name','$email','$password','$fullname','$pno')";
    mysqli_query($connection,$reg);
    echo '<script>alert("Registration Done .")</script>';
    header( "refresh:0; url=login.php" );
}
?>