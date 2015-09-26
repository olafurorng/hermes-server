package project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import project.responseentities.LoginResponse;
import project.responseentities.subentities.DriverListEntry;
import project.responseentities.subentities.RiderListEntry;
import project.responseentities.subentities.User;

import java.util.ArrayList;

/**
 * Created by olafurorn on 9/26/15.
 */
@Controller
public class LoginController
{

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@RequestParam(value="accessToken") String accessToken,
                                        @RequestParam(value="fbId") String fbId,
                                        @RequestParam(value="name") String name,
                                        @RequestParam(value="email") String email
                                        )
    { // TODO: taka við fleiri upplýsingum sem við fáum frá server


        if (fbId == null || fbId.isEmpty()
                || accessToken == null || accessToken.isEmpty()
                || name == null || name.isEmpty())
        {
            return new ResponseEntity<LoginResponse>(HttpStatus.UNAUTHORIZED);
        }




        // TODO: setja í gagnagrunn ef user er ekki til og return-a 201 -- annars fletta user upp og return-a 200

        User user = new User(name);
        LoginResponse loginResponse = new LoginResponse(new ArrayList<DriverListEntry>(),
                new ArrayList<RiderListEntry>(),
                user);
        return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
    }
}
