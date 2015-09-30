<!DOCTYPE html>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>Hermes</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='/resources/theme1/css/style.css' rel='stylesheet' type='text/css'>
    <script src="/resources/theme1/build/jquery-1.11.3.min.js" />"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <script src="/resources/theme1/src/facebook.js"></script>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href=""><img alt="Brand" src="https://flitways.com/img/flitways/img_external/gallery/Car-1B-1500x550.png"></a>
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
  <main>
    <div class="first_block_container">
        <section class="first_left_block"></section>
        <section class="first_right_block">
        <div class="fb_container">
            <img class="fb_lock" src="http://www.veryicon.com/icon/png/System/Android%201/Very%20Basic%20lock.png">
            <p>Authentication</p>
            <fb:login-button scope="public_profile,email" class="fb-button" onlogin="checkLoginState();">
            </fb:login-button>
        </div>
        <div id="app" class="container-fluid"></div>
        </section>
    </div>
    <section class="second_block">
        <p>Prufa</p>
        <a href="http://twitter.com/me" class="twitter_img" title="Twitter link"></a>
    </section>
  </main>
    
        <!--<div class="push"></div>-->
        <div class="footer">
            <p>&#9400; 2015 Project Hermes. All Rights Reserved. Terms of Use and Privacy</p>
    </div>
</body>
</html>