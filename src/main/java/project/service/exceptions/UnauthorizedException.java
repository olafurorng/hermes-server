package project.service.exceptions;

/**
 * Created by olafurorn on 10/6/15.
 */
public class UnauthorizedException extends Exception
{
    public UnauthorizedException()
    {
        super("User is not authorized");
    }
}
