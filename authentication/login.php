<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz Land</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="full-page">
        <div class='navbar'>
            <div class='logo'>
                <a href='#'><h1>Quiz Land</h1></a>
            </div>
            <nav>
                <ul id='MenuItems'>
                    <li><button class='loginbtn'onclick="document.getElementById('login-form').style.display='block'" style="width:auto;">Login</button></li>
                    <li><button class='loginbtn'onclick="document.getElementById('register-form').style.display='block'" style="width:auto;">Register</button></li>
                </ul>
            </nav>
        </div>
        <div class="sub-page">
          <div class="overlay"></div>
           <div class="text">
               <h2>“Success is not final, failure is not fatal; it is the courage to continue that counts.”</h2>
               <br>
               <h3>— WINSTON CHURCHILL</h3>
            </div>
        </div>
        <div id='login-form' class="login-page">
            <div class="form-box">
                <span onclick="document.getElementById('login-form').style.display='none'" class="close">&times;</span>
                <div class="form">
                    <form class='login-form', action="validation.php", method="post">
                        <center><h1 class="main-heading">Login</h1></center>
				        <input type="text"name='username' placeholder="User Name", required/>
				        <input type="password" name='password' placeholder="password", required/>
				        <button>LOGIN</button>
				    </form>
                </div>
            </div>
        </div>
        <div id="register-form" class='register-page'>
            <div class="form-box1">
               <span onclick="document.getElementById('register-form').style.display='none'" class="close">&times;</span>
                <div class="form1">
                    <form class='register-form', action="signup.php", method="post">
                        <center><h1 class="main-heading">Register Form</h1></center>
				        <input type="text" name='user'placeholder="user name" required/>
				        <input type="text" name='fullname'placeholder="full name" required/>
				        <input type="text" name='pno'placeholder="phone number" required/>
				        <input type="email" name='emailid'placeholder="email-id" required/>
				        <input type="password"name='password' placeholder="password" required/>
				        <button>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>