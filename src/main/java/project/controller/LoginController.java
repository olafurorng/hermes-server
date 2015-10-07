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
import project.service.UserService;
import project.responseentities.LoginResponse;
import project.responseentities.subentities.User;
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

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(
                                        @RequestParam(value="accessToken") String accessToken,
                                        @RequestParam(value="id") String id,
                                        @RequestParam(value="name") String name,
                                        @RequestParam(value="email") String email
                                        )
    {
        Log.i(LOGTAG, "calling /login");
        // TODO: checka á accessToken-inu

        // TODO: taka við fleiri upplýsingum sem við fáum frá facebook




        User user = null;
        try {
            user = userService.getUser(id, accessToken);
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

            String accessTokenGeneratedFromServer = userService.createUser(id, name, email);
            if (accessTokenGeneratedFromServer == null) return new ResponseEntity<LoginResponse>(HttpStatus.SERVICE_UNAVAILABLE);
            user = new User(accessTokenGeneratedFromServer, id, name, email, 0.0, 0);

            LoginResponse loginResponse = new LoginResponse(
                    mockDataService.getMockDriverList(),
                    mockDataService.getMockRiderList(),
                    user);
            return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.CREATED);
        }
        else
        {
            // user exist and we return 200
            LoginResponse loginResponse = new LoginResponse(
                    mockDataService.getMockDriverList(),
                    mockDataService.getMockRiderList(),
                    user);
            return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
        }

        // TODO: return-a fake gögnum af Driver-um og Rider-um

    }
}
