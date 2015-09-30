var HermesApp = React.createClass({
    render: function() {
        return 
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
;

    }
});
 
React.render(<HermesApp name="Hermes" />, document.getElementById('footer1'));