<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="is">

<head>
  <meta charset="UTF-8">
  <title>ÍsFar</title>
  <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
  <link href='/resources/theme1/css/main.css' rel='stylesheet' type='text/css'>
  <script src="/resources/theme1/src/jquery-1.11.3.min.js"></script>
  <script src="/resources/theme1/src/main.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>

<body>
  <header class="basic-header">
    <h1>ÍsFar</h1>
  </header>
  <main>
    <section class="pickContainer">
      <div class="selectContainer">
        <h5 class="selectType activeTab" data-type="driver">Fá ísFar</h5>
        <div class="verticalLine"></div>
        <h5 class="selectType notActiveTab" data-type="rider">Bjóða ísFar</h5>
      </div>
      <button class="btn btn-default addButton">Bæta við</button>
    </section>
    <section class="addContainer">
      <div class="addContainerText"></div>
      <div class="register">  
          <form name="form" id="form" method="post">             
              <div class="phone">
                  <span class="glyphicon glyphicon-phone"></span>
                  <label class="sr-only" for="phone">Phone</label>          
                  <input type="text" id="phone" class="phoneInput form-control" name="phone" maxlength="7" placeholder="Símanúmer"/>
                  <label id="errorPhone"></label>
              </div>
              <div class="car">

              </div>

              <div class="place">

              </div>
              <div class="sliderBody">
                  <span class="glyphicon glyphicon-usd"></span>
                  <label for="amount"></label>
                  <input type="text" id="amount" class="price form-control">
                <div id="slider-range"></div>
              </div>    
              <div class="radios">
                  <span><i class="fa fa-user-times"></i></span>
                  <input type="radio" name="rGroup" value=1 id="r1" checked="checked" />
                  <label class="radio" for="r1">1</label>
                  <input type="radio" name="rGroup" value=2 id="r2" />
                  <label class="radio" for="r2">2</label>
                  <input type="radio" name="rGroup" value=3 id="r3" />
                  <label class="radio" for="r3">3</label>
                  <input type="radio" name="rGroup" value=4 id="r4" />
                  <label class="radio" for="r4">4</label>
                  <input type="radio" name="rGroup" value=5 id="r5" />
                  <label class="radio" for="r5">5</label>
                  <input type="radio" name="rGroup" value=6 id="r6" />
                  <label class="radio" for="r6">6</label>
              </div>
              <div class="clocks">
                  
              </div>
                  <textarea rows="4" cols="20" class="message form-control" name="comments" placeholder="Auka athugasemdir"></textarea>
                  <button class="submitRegister" type="button">
                      <i class="fa fa-taxi"> Skrá far</i>                  
                  </button>    
          </form>
      </div>
    </section>
    <section class="rider-driver-list">
        <div id="rider-driver-data" class="container-fluid"></div>
    </section>
    
        <section class="userList">

        </section>

  </main>
</body>

</html>