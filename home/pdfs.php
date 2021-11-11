<?php
session_start();
?>
<html>
    <head>
        <title>Quiz Land</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="CSS/pdfs.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    </head>
    <body>
        <div class="wrapper">
            <div class="col-img header_height">
                <img src="../home/images/lg.PNG">
            </div>
            <div class="col-8 header_height banner banner">
                <h1>Quiz Land</h1>
                <h3>Practice Brings Perfection.....</h3>
            </div>
            <div class="col-1 header_height lo">
                <button><a href="../authentication/logout.php"><i class="fas fa-sign-out-alt"></i>logout</a></button>
                <h2><?php echo "Hello, ".$_SESSION['user'] ?></h2>
            </div>
            <div class="col-12 menu_height menu">
                <ul>
                    <li><a href="home.php"><i class="fas fa-home"></i>Home</a></li>
                    <li><a href="profile.php"><i class="fas fa-user"></i>Profile</a></li>
                    <li><a href="quiz.php"><i class="fas fa-graduation-cap"></i>Quiz</a></li>
                    <li><a href="about.php"><i class="fas fa-users"></i></i>About</a></li>
                    <li><a href="pdfs.php"><i class="fas fa-book"></i>PDF's</a></li>
                </ul>
            </div>
            <div class="col-12 content_title_height content_title">
                <h1 >PDFs</h1>
            </div>
            <div class="col-12 box">
                    <div class="col-4 box1">
                        <center><h1> Basic JavaScript </h1></center>
                        <center><img src="../home/images/javascript.jpg"></center>
                        <h2><a href="../home/javascript.pdf" target="_blank"> Download </a> </h2>
                    </div>
                    <div class="col-4 box2">
                        <center><h1> Basic HTML </h1></center>
                        <center><img src="../home/images/html.jpg"></center>
                        <h2><a href="../home/html.pdf" target="_blank"> Download </a> </h2>
                    </div>
                    <div class="col-4 box3">
                        <center><h1> Basic CSS </h1></center>
                        <center><img src="../home/images/css.png"></center>
                        <h2><a href="../home/css.pdf" target="_blank"> Download </a> </h2>
                    </div>
                </div>
            <div class="col-12 bigFooter_title_height bigfooter_title"><h1>Find us</h1></div>
            <div class="col-12 bigFooter_title_height bigfooter1">
                <ul>
                    <li><a href="https://www.facebook.com/mirzaadnan.adib.9">Facebook</a></li>
                    <li><a href="https://www.youtube.com/channel/UCMDcOXjVqGABiK1ZXxoAWxA">YouTube</a></li>
                    <li><a href="https://sites.google.com/diu.edu.bd/mirza-adnan/home">Google Site</a></li>
                    <li><a href="https://twitter.com/adnan_adib">Twitter</a></li>
                    <li><a href="http://www.google.com/url?q=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fmirza-adnan-310b81184&sa=D&sntz=1&usg=AFQjCNEmdAQ-p3g3NNzGta8_HqZmGcGrPQ">Linked In</a></li>
                </ul>
            </div>
            <div class="col-12 bigFooter_height bigfooter2">
                <h4>Got any feedback?</h4>
                <h4>Let us know :  developer.quizland@diu.edu.bd</h4>
            </div>
            <div class="col-12 footer_height footer">
            <h3>Copyright © Mirza Adnan, Sabbir Hasan, Ahasan Ullah. All rights reserved.</h3>
            </div>
        </div>
    </body>
</html>
