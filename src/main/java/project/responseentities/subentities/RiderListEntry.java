package project.responseentities.subentities;

/**
 * Created by olafurorn on 9/26/15.
 */
public class RiderListEntry
{
    private final User rider;
    private final String currentLocation;
    private final String destination;
    private final long pickUpDate; // timestamp
    private final int lowPrice;
    private final int highPrice;
    private final String message;
    private final long created; // timestamp of when the rider list entry was created
    private final int numberOfPeople;

    public RiderListEntry(User rider, String currentLocation, String destination, long pickUpDate, int lowPrice,
                          int highPrice, String message, long created, int numberOfPeople)
    {
        this.rider = rider;
        this.currentLocation = currentLocation;
        this.destination = destination;
        this.highPrice = highPrice;
        this.created = created;
        this.numberOfPeople = numberOfPeople;
        this.pickUpDate = pickUpDate;
        this.lowPrice = lowPrice;
        this.message = message;
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

    public long getPickUpDate()
    {
        return pickUpDate;
    }

    public int getLowPrice()
    {
        return lowPrice;
    }

    public String getMessage()
    {
        return message;
    }

    public long getCreated()
    {
        return created;
    }

    public int getNumberOfPeople()
    {
        return numberOfPeople;
    }

    public int getHighPrice()
    {
        return highPrice;
    }
}
