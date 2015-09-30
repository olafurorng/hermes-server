<!DOCTYPE html>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>Hermes</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='/resources/theme1/css/style.css' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="images/favicon.ico">
    <script src="/resources/theme1/build/jquery-1.11.3.min.js" />"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <script src="/resources/theme1/src/facebook.js"></script>
  <nav class="navbar">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
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
    </div>
  </nav>
  <header>
    <h1>Hermes</h1>
    <button class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i>Sign in with Facebook</button>
      <!-- <fb:login-button scope="public_profile,email" class="fb-button" onlogin="checkLoginState();">
      </fb:login-button> -->
  </header>
  <!-- <main>
    <section class="first_left_block"></section>
    <section class="first_right_block">
      <div class="fb_container">
        <img class="fb_lock" src="http://www.veryicon.com/icon/png/System/Android%201/Very%20Basic%20lock.png">
        <fb:login-button scope="public_profile,email" class="fb-button" onlogin="checkLoginState();">
        </fb:login-button>
      </div>
      <div id="app" class="container-fluid"></div>
    </section>
    <section class="second_block"></section>
  </main> -->
</body>
</html>