<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html lang="is">
<head>
    <meta charset="UTF-8">
    <title>ÍsFar</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='/resources/theme1/css/index.css' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div class="headerContainer">
    <header class="bg-header">
      <button class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i>Skráðu þig inn með Facebook</button>
    </header>
  </div>
  <main>
    <section class="items">
      <div class="itemContainer">
        <div>
          <img src="/resources/theme1/images/money.png">
          <h5>Ódýrari</h5>
          <p>Að meðaltali fimmfalt ódýrari en venjulegur leigubíll</p>
        </div>
        <div>
          <img src="/resources/theme1/images/mobile.png">
          <h5>Skilvirkari</h5>
          <p>Notaðu appið. Hver nennir að hringja og biðja um far?</p>
        </div>
        <div>
          <img src="/resources/theme1/images/lock.png">
          <h5>Öruggara</h5>
          <p>Hægt er að gefa notendur stjörnur sem veitir þér aukið öryggi</p>
        </div>
      </div>
    </section>
    <section class="about">
      <h3>Hvað er ÍsFar?</h3>
      <p>
          Ísfar er komanlegt app sem er hugsuð til að einfalda samskiptin milli bílstjóra og farþega þegar verið að skutla.
          Áður hafa þessi samskipti farið fram á facebook hóp á mjög óskilvirkan hátt. 
          Til að bæta þessi samskipti, mun okkar app geta:
      </p>
      <p>
          Valið að sjá aðeins þá pósta sem eru að keyra eða eru farþegar. 
          Flokkað pósta eftir:
          Kostnaði
          Staðsetningu
          Tíma
          Fjölda farþega
          Gefið notendum stjörnur.
      </p>
      <p>
          En auk þess mun vera hægt að bæta athugasemdum við pósta og tala við fólk í gegnum messenger.

          Framtíðarsýn er svo að hægt verði að tengja önnur öpp við okkar sem geta séð um borganir milli fólks.
      </p>
    </section>
  </main>
  <footer>
    <p>&#9400; 2015 Project ÍsFar. All Rights Reserved. Terms of Use and Privacy</p>
  </footer>
  
  <script src="/resources/theme1/src/facebook.js"></script>
</body>
</html>