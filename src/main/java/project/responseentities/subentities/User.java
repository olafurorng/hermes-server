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
    private final String accessToken; // we user the fb accessToken to make our platform more secure
    private final String id; // we use the fb id as the user id for our platform
    private final String name;
    private final String email;
    private final double starRating;
    private final int numberOfStarRatings;

    public User(String accessToken, String id, String name, String email,
                double starRating, int numberOfStarRatings)
    {
        this.accessToken = accessToken;
        this.id = id;
        this.name = name;
        this.email = email;
        this.starRating = starRating;
        this.numberOfStarRatings = numberOfStarRatings;
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

    public double getStarRating()
    {
        return starRating;
    }

    public int getNumberOfStarRatings()
    {
        return numberOfStarRatings;
    }

    public String getAccessToken()
    {
        return accessToken;
    }
}
