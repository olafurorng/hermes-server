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
    private final String id;
    private final String name;
    private final String email;

    public User(String id, String name, String email)
    {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getId()
    {
        return id;
    }

    public String getEmail()
    {
        return email;
    }
}
