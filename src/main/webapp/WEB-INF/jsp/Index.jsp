<!DOCTYPE html>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>Hermes</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <meta name="google-translate-customization" content="ddc9f3164108a4cc-1cf09553f012cff3-g8ae302fda173c877-16"></meta>
    <link href='/resources/theme1/css/style.css' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="images/favicon.ico">
    <script src="<c:url value="/resources/theme1/build/react-with-addons.js" />"></script>
    <script src="<c:url value="/resources/theme1/build/jquery-1.11.3.min.js" />"></script>


    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<script>
    // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI(response.authResponse.accessToken);
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('app').innerHTML = 'Please log ' +
                    'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('app').innerHTML = 'Please log ' +
                    'into Facebook.';
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '636984166405294',
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.2' // use version 2.2
        });

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI(accessToken) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,name,email', function(response) {
            console.log('Successful login for: ' + response.name);
            console.log(response);
            response.accessToken = accessToken;
            $.ajax({
                type: 'POST',
                url: '/login',
                data: response,
                success: function(data) {
                    console.log(data);
                }
            });
            document.getElementById('app').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
        });
    }
  </script>

  <!--
    Below we include the Login Button social plugin. This button uses
    the JavaScript SDK to present a graphical Login button that triggers
    the FB.login() function when clicked.
  -->

  <fb:login-button scope="public_profile,email" class="fb-login" onlogin="checkLoginState();">
  </fb:login-button>
  <div id="app" class="container-fluid"></div>

  <script src="<c:url value="/resources/theme1/build/test.js" />"></script>



<!--SETJA Í VIEWS SEM FOOTER
  -->
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

      <a class="navbar-brand" href="index.php"><img alt="Brand" src="http://gamematchwood.appspot.com/assets/habbo_logo_small.png"></a>
    </div>
    <form class="navbar-form navbar-right" role="search">
    <div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'is', autoDisplay: false}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        
      <!--  <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Leita</button>  -->
      </form>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="">About us</a></li>
        <li><a href="" >Idea</a></li>
        <!--
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown<span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="menntung.php"></a></li>
            <li><a href="menntunm.php"></a></li>
            <li class="divider"></li>
            <li><a href="menntunh.php"></a></li>
          </ul>
        </li>
        -->
        <li><a href="">Contact</a></li>
      </ul>
      

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</nav>





</body>
</html>