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

    public DriverListEntry(User driver, Date startDriving, Date stopDriving)
    {
        this.driver = driver;
        this.startDriving = startDriving;
        this.stopDriving = stopDriving;
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
}
