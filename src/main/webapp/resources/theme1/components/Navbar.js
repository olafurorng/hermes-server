var Navbar = React.createClass({
    render: function() {
        return(
         <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
        // Brand and toggle get grouped for better mobile display -->
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href=""><img alt="Brand" src="https://flitways.com/img/flitways/img_external/gallery/Car-1B-1500x550.png"></a>
        </div>
        
        <form className="navbar-form navbar-right" role="search">
        /*    <div id="google_translate_element"></div>
            <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'is',
                    autoDisplay: false
                }, 'google_translate_element');
            }
            </script>
            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
            /*<div className="form-group">
          <input type="text" className="form-control" placeholder="Search">
        </div>
        <button type="submit" className="btn btn-default">Leita</button>  */
        </form>
        <div className="fb_twitter">
            //Twitter
            <a href="https://twitter.com/share" className="twitter-share-button">Tweet</a>
            <script>
            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + '://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, 'script', 'twitter-wjs');
            </script>
            //Facebook like and share
            <div className="fb-like" data-href="https://www.facebook.com/ELKO.is?fref=ts" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
        </div>
        //Collect the nav links, forms, and other content for toggling
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><a href="">About us</a></li>
                <li><a href="">Idea</a></li>
                /*
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown<span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="menntung.php"></a></li>
            <li><a href="menntunm.php"></a></li>
            <li className="divider"></li>
            <li><a href="menntunh.php"></a></li>
          </ul>
        </li>
        */
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        ///.navbar-collapse
    </div>
    // /.container-fluid 
</nav>

);
    }
});