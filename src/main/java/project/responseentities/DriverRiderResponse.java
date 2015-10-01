package project.responseentities;

import project.responseentities.subentities.DriverListEntry;
import project.responseentities.subentities.RiderListEntry;

import java.util.List;

/**
 * Created by olafurorn on 10/1/15.
 */
public class DriverRiderResponse
{
    private final List<DriverListEntry> driversList;
    private final List<RiderListEntry> ridersList;

    public DriverRiderResponse(List<DriverListEntry> driversList, List<RiderListEntry> ridersList)
    {
        this.driversList = driversList;
        this.ridersList = ridersList;
    }

    public List<DriverListEntry> getDriversList()
    {
        return driversList;
    }

    public List<RiderListEntry> getRidersList()
    {
        return ridersList;
    }
}
