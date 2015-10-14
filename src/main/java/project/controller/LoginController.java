package project.controller;

import misc.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import project.mockservice.MockDataService;
import project.responseentities.LoginResponse;
import project.responseentities.subentities.User;
import project.service.UserService;
import project.service.exceptions.UnauthorizedException;

/**
 * Created by olafurorn on 9/26/15.
 */
@Controller
public class LoginController
{
    private static final String LOGTAG = LoginController.class.getSimpleName();

    private final UserService userService;
    private final MockDataService mockDataService;


    @Autowired
    public LoginController(UserService userService, MockDataService mockDataService)
    {
        this.userService = userService;
        this.mockDataService = mockDataService;
    }

    /**
     *
     * @param accessToken our own, server generated access token
     * @param fbAccessToken access token we get from facebook
     * @param id fb user id of the user, which we also use as user id
     * @param name full name of user
     * @param firstName first name of user
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(
                                        @RequestParam(value="accessToken") String accessToken,
                                        @RequestParam(value="fb_access_token") String fbAccessToken,
                                        @RequestParam(value="id") String id,
                                        @RequestParam(value="name") String name,
                                        @RequestParam(value="email") String email,
                                        @RequestParam(value="first_name") String firstName,
                                        @RequestParam(value="picture_url") String pictureUrl
                                        )
    {
        Log.i(LOGTAG, "calling /login");

        User user = null;
        try {
            user = userService.getUser(id, accessToken, fbAccessToken);
        }
        catch (UnauthorizedException e)
        {
            Log.w(LOGTAG, e);
            return new ResponseEntity<LoginResponse>(HttpStatus.UNAUTHORIZED);
        }

        if (user == null)
        {
            // user doesn't exist and is a new user
            // user is created in database and we return 201

            String accessTokenGeneratedFromServer = userService.createUser(id, name, email, firstName, pictureUrl);
            if (accessTokenGeneratedFromServer == null) return new ResponseEntity<LoginResponse>(HttpStatus.SERVICE_UNAVAILABLE);
            user = new User(accessTokenGeneratedFromServer, id, name, email, 0.0, 0, pictureUrl, firstName,
                    null); // phone number is null, as we can't get it from facebook

            LoginResponse loginResponse = new LoginResponse(user);
            return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.CREATED);
        }
        else
        {
            // user exist and we return 200
            LoginResponse loginResponse = new LoginResponse(user);
            return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
        }
    }
}
