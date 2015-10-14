package project.responseentities.subentities;

import java.sql.Date;

/**
 * Created by olafurorn on 9/26/15.
 */
public class DriverListEntry
{
    private final User driver;
    private final Date startDriving;
    private final Date stopDriving;
    private final int lowPrice;
    private final int highPrice;
    private final int numberOfPeople;
    private final String carDescription;
    private final String place;
    private final String message;
    private final long created;

    public DriverListEntry(User driver, Date startDriving, Date stopDriving, int lowPrice, int highPrice,
                           int numberOfPeople, String carDescription, String place, String message,
                           long created)
    {
        this.driver = driver;
        this.startDriving = startDriving;
        this.stopDriving = stopDriving;
        this.lowPrice = lowPrice;
        this.highPrice = highPrice;
        this.numberOfPeople = numberOfPeople;
        this.carDescription = carDescription;
        this.place = place;
        this.message = message;
        this.created = created;
    }

    public User getDriver()
    {
        return driver;
    }

    public Date getStartDriving()
    {
        return startDriving;
    }

    public Date getStopDriving()
    {
        return stopDriving;
    }

    public int getLowPrice()
    {
        return lowPrice;
    }

    public int getHighPrice()
    {
        return highPrice;
    }

    public int getNumberOfPeople()
    {
        return numberOfPeople;
    }

    public String getCarDescription()
    {
        return carDescription;
    }

    public String getPlace()
    {
        return place;
    }

    public String getMessage()
    {
        return message;
    }

    public long getCreated()
    {
        return created;
    }
}
