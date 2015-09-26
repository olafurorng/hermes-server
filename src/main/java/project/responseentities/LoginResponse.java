package project.responseentities;

import project.responseentities.subentities.DriverListEntry;
import project.responseentities.subentities.RiderListEntry;
import project.responseentities.subentities.User;

import java.util.List;

/**
 * Created by olafurorn on 9/26/15.
 */
public class LoginResponse
{
    private final List<DriverListEntry> driversList;
    private final List<RiderListEntry> ridersList;
    private final User user;

    public LoginResponse(List<DriverListEntry> driversList, List<RiderListEntry> ridersList, User user)
    {
        this.driversList = driversList;
        this.ridersList = ridersList;
        this.user = user;
    }

    public List<DriverListEntry> getDriversList()
    {
        return driversList;
    }

    public List<RiderListEntry> getRidersList()
    {
        return ridersList;
    }

    public User getUser()
    {
        return user;
    }
}
