package project.responseentities.subentities;

import project.serverentities.FullUser;

/**
 * Created by olafurorn on 9/26/15.
 *
 * Minimal user, that contains data for the web
 * to handle all information about user, server
 * side we user {@link FullUser}
 */
public class User
{
    private final String name;

    public User(String name)
    {
        this.name = name;
    }

    public String getName() {
        return name;
    }


}
