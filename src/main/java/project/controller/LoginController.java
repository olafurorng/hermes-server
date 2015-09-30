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

/**
 * Created by olafurorn on 9/26/15.
 */
@Controller
public class LoginController
{
    private static final String LOGTAG = LoginController.class.getSimpleName();

    private final UserService userModel;
    private final MockDataService mockDataService;


    @Autowired
    public LoginController(UserService userModel, MockDataService mockDataService)
    {
        this.userModel = userModel;
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


        if (id == null || id.isEmpty()
                || accessToken == null || accessToken.isEmpty()
                || name == null || name.isEmpty())
        {
            return new ResponseEntity<LoginResponse>(HttpStatus.UNAUTHORIZED);
        }

        User user = userModel.getUser(id);

        if (user == null)
        {
            // user doesn't exist and is a new user
            // user is created in database and we return 201

            userModel.createUser(id, name, email);
            user = new User(id, name, email); // TODO: bíða eftir success frá gagnagrunni og þá senda svar, annars senda 5xx villu


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
