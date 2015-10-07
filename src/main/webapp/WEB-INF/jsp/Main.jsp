<!DOCTYPE html>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="is">
<!-- TODO: olafur: update after this PR has been merged end fixed: https://github.com/pajdak3/hermes-server/pull/11
                    so when the webpage create this page it has to send the accessToken-->
<head>
    <meta charset="UTF-8">
    <title>Hermes</title>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='/resources/theme1/css/style.css' rel='stylesheet' type='text/css'>
    <script src="/resources/theme1/build/jquery-1.11.3.min.js" />"></script>
    <script src="/resources/theme1/build/main.js" />"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
  </main>
</body>
</html>