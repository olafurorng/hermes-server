package project.responseentities.subentities;

import java.sql.Date;

/**
 * Created by olafurorn on 9/26/15.
 */
public class RiderListEntry
{
    private final User rider;
    private final String currentLocation;
    private final String destination;
    private final Date pickUpDate;

    public RiderListEntry(User rider, String currentLocation, String destination, Date pickUpDate)
    {
        this.rider = rider;
        this.currentLocation = currentLocation;
        this.destination = destination;
        this.pickUpDate = pickUpDate;
    }

    public User getRider()
    {
        return rider;
    }

    public String getCurrentLocation()
    {
        return currentLocation;
    }

    public String getDestination()
    {
        return destination;
    }

    public Date getPickUpDate()
    {
        return pickUpDate;
    }
}
