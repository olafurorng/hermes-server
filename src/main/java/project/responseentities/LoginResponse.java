package project.responseentities;

import project.responseentities.subentities.User;

/**
 * Created by olafurorn on 9/26/15.
 */
public class LoginResponse
{
    private final User user;

    public LoginResponse(User user)
    {
        this.user = user;
    }

    public User getUser()
    {
        return user;
    }
}
