package project.controller;

import junit.framework.TestCase;
import org.springframework.http.ResponseEntity;
import project.model.UserModel;
import project.responseentities.LoginResponse;

/**
 * Created by olafurorn on 9/30/15.
 */
public class LoginControllerTest extends TestCase
{

    public void setUp() throws Exception
    {
        super.setUp();

    }

    public void tearDown() throws Exception
    {

    }

    public void testLogin_withRealDatabase() throws Exception
    {
        LoginController loginController = new LoginController(new UserModel());
        ResponseEntity<LoginResponse> loginResponseResponseEntity =
                loginController.login("test_access_token", "test_id", "test_name", "test_email");

        assertTrue(loginResponseResponseEntity.getStatusCode().is2xxSuccessful());
    }
}