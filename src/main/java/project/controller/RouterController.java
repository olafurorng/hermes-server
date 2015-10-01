package project.controller;

import misc.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class RouterController
{
    private static final String LOGTAG = RouterController.class.getSimpleName();

    public RouterController()
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

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String main()
    {
        String path = "Main";
        Log.i(LOGTAG, "Routing to: " + path);
        return path;
    }

}
