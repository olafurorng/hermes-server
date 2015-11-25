package project.controller;

import misc.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
public class RouterController
{
    private static final String LOGTAG = RouterController.class.getSimpleName();

    public RouterController()
    {

    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(HttpServletRequest request) {
        // ATHUGA: accessToken
        // ... hugs hugs...
        Log.i("getting user", "" + request.getSession().getAttribute("user"));
        String path = (request.getSession().getAttribute("user") != null) ? "Main" : "Index";
        Log.i(LOGTAG, "Routing to: " + path);
        return path;
    }

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String main(HttpServletRequest request)
    {
        if (request.getSession().getAttribute("user") != null) return "redirect:/";
        String path = "Main";
        Log.i(LOGTAG, "Routing to: " + path);
        return path;
    }

}
