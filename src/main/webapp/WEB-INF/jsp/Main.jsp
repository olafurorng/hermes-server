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
    <script src="/resources/theme1/src/main.js" />"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

</head>
<body>
  <header class="basic-header">
    <h1>Hermes</h1>
  </header>
  <main>
    <section class="whatToDo">
        <h1>I want to ...</h1>
    </section>
    <section class="pickContainer">
        <a href="">Drive</a>
        <a href="">Ride</a>
    </section>
    <section class="add" id="rider">
        <a></a>
    </section>
    <div class="riderRegister">
        <h1 role="heading">Ride Information</h1>
    <br>
    <div class="utkoma">
        <h5 role="heading">Skilaboð móttekin</h5>
        <p></p>
    </div>      
    <form name="form" id="form" action="" method="post">
        <div>
        <div>
            <label for="simi" class="name">Phone:*</label>
            <br>
            <input type="text" id="phone" class="riderInput" name="phone" placeholder="Phone">
            <label id="errorPhone"></label>
        </div>
        <br>
        <div>
            <label for="efni" class="name">Title:*</label>
            <br>
            <input type="text" id="subject" name="subject" class="riderInput" placeholder="Title">
            <label id="errorSubject"></label>
        </div>
        <br>
        <br>
        <p>
        <label for="amount">Price range:</label>
        <input type="text" id="amount" class="price">
        </p>
        <div id="slider-range"></div>
        <br>
        <label for="numberpeople" class="name">Number of people:</label>
        <br>

        <div class="radios">
        <input type="radio" name="rGroup" value="1" id="r1" checked="checked" />
        <label class="radio" for="r1">1</label>
        <input type="radio" name="rGroup" value="2" id="r2" />
        <label class="radio" for="r2">2</label>
        <input type="radio" name="rGroup" value="3" id="r3" />
        <label class="radio" for="r3">3</label>
        <input type="radio" name="rGroup" value="4" id="r4" />
        <label class="radio" for="r4">4</label>
        <input type="radio" name="rGroup" value="5" id="r5" />
        <label class="radio" for="r5">5</label>
        <input type="radio" name="rGroup" value="6" id="r6" />
        <label class="radio" for="r6">6</label>
        </div>
        <div class="loc_des">
            <label for="Location" class="name">Location to Destination:*</label>
            <input type="text" id="location" name="location" class="locationInput" placeholder="Location">
            <span> to </span>
            <input type="text" id="destination" name="destination" class="locationInput" placeholder="Destination">
            <label id="errorLocation"></label>     
            <label id="errorDestination"></label>
        </div>
        <div>
            <label for="name" class="name">Message:</label>
            <br>
             <textarea rows="4" cols="20" class="max" id="message" name="comments" placeholder="Message"></textarea>
            <br>
        </div>
        <input type="submit" name="submit" value="OK" class="takki"> 
    </form>
    </div>
  </main>
</body>
</html>