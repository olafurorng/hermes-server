package project.controller;

import misc.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController
{
    private static final String LOGTAG = HomeController.class.getSimpleName();

    public HomeController()
    {

    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home()
    {
        // ATHUGA: accessToken
        // ... hugs hugs...
        // String path = (accessToken) ? : ;
        String path = "Index";
        Log.i(LOGTAG, "Routing to: " + path);
        return path;
    }

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public String select()
    {
        String path = "Select";
        Log.i(LOGTAG, "Routing to: " + path);
        return path;
    }

}
