package project.controller;

import junit.framework.TestCase;
import org.springframework.http.ResponseEntity;
import project.mockservice.MockDataService;
import project.service.UserService;
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
        LoginController loginController = new LoginController(new UserService(), new MockDataService());
        ResponseEntity<LoginResponse> loginResponseResponseEntity =
                loginController.login("test_access_token", "test_fb_access_token", "test_id", "test_name", "test_email",
                        "test_first_name", null);

        assertTrue(loginResponseResponseEntity.getStatusCode().is2xxSuccessful());
        /*assertEquals(MockDataService.NUMBER_OF_MOCK_DRIVER, loginResponseResponseEntity.getBody().getDriversList().size());
        assertEquals(MockDataService.NUMBER_OF_MOCK_RIDER, loginResponseResponseEntity.getBody().getRidersList().size());*/
    }
}