<!DOCTYPE html>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>Hermes</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='/resources/theme1/css/style.css' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <nav class="navbar">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="">About us</a></li>
          <li><a href="">Idea</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
        <ul class="nav navbar-nav merki">
          <li><a href="" class="twitter_img" title="Twitter link"></a></li>
          <li><a href="" class="facebook_img" title="Facebook link"></a></li>
          <li><a href="" class="snapchat_img" title="Snapchat link"></a></li>
        </ul>         
    </div> 
  </nav>
  <header class="bg-header">
    <h1>Hermes</h1>
    <button class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i>Sign in with Facebook</button>
  </header>
  <main>
    <div class="first_block_container">
        <section class="first_left_block"></section>
        <section class="first_right_block">
        <div id="app" class="container-fluid"></div>
        </section>
    </div>
    <section class="second_block">
    
    </section>
  </main>
  <footer>
    <p>&#9400; 2015 Project Hermes. All Rights Reserved. Terms of Use and Privacy</p>
  </footer>
  
  <script src="/resources/theme1/src/facebook.js"></script>
</body>
</html>