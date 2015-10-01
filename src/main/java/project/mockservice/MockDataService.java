package project.mockservice;

import org.springframework.stereotype.Service;
import project.responseentities.subentities.DriverListEntry;
import project.responseentities.subentities.RiderListEntry;
import project.responseentities.subentities.User;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by olafurorn on 9/30/15.
 *
 * Used to get mock data to try out things before they have been fully implemented
 */
@Service
public class MockDataService
{
    public static final int NUMBER_OF_MOCK_DRIVER = 12;
    public static final int NUMBER_OF_MOCK_RIDER = 8;

    private final List<String> names = Arrays.asList(
            "Ólafur Örn Guðmundsson",
            "Hlynur Freyr Jónsson",
            "Viktor Pajdak",
            "Susan Johnsen");

    private final List<String> emails = Arrays.asList(
            "olafurorng@gmail.com",
            "oog5@hi.is",
            "obama@obama.com",
            "hfj5@hi.is",
            "vip9@hi.is");

    private final List<String> ids = Arrays.asList(
            "7954123983290342",
            "5434448985345409",
            "5893763594275695",
            "1230495844348884",
            "5687392489905864");

    private final List<String> locations = Arrays.asList(
            "KEF flugvöllur",
            "Miðbær",
            "Laugavegur 58",
            "Garðatorg");


    public MockDataService()
    {

    }

    public List<RiderListEntry> getMockRiderList()
    {
        List<RiderListEntry> riderListEntries = new ArrayList<RiderListEntry>();

        for (int i = 0; i < NUMBER_OF_MOCK_RIDER; i++)
        {
            RiderListEntry riderListEntry = new RiderListEntry(new User(getRandomId(), getRandomName(),
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings()),
                    getRandomLocation(), getRandomLocation(), getRandomDateInTheFuture());
            riderListEntries.add(riderListEntry);

        }
        return riderListEntries;
    }

    public List<DriverListEntry> getMockDriverList()
    {
        List<DriverListEntry> driverListEntries = new ArrayList<DriverListEntry>();

        for (int i = 0; i < NUMBER_OF_MOCK_DRIVER; i++)
        {
            DriverListEntry driverListEntry = new DriverListEntry(new User(getRandomId(), getRandomName(),
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings()),
                    getRandomDateInTheFuture(), getRandomDateInTheFuture());
            driverListEntries.add(driverListEntry);
        }

        return driverListEntries;
    }

    private String getRandomName()
    {
        int index = (int) (Math.random()*names.size());
        return names.get(index);
    }

    private String getRandomEmail()
    {
        int index = (int) (Math.random()*emails.size());
        return emails.get(index);
    }

    private String getRandomId()
    {
        int index = (int) (Math.random()*ids.size());
        return ids.get(index);
    }

    private String getRandomLocation()
    {
        int index = (int) (Math.random()*locations.size());
        return locations.get(index);
    }

    private double getRandomRatings()
    {
        int index = (int) (Math.random()*5) + 1;
        return index;
    }

    private int getRandomNumberOfRatings()
    {
        int index = (int) (Math.random()*30) + 1;
        return index;
    }

    private Date getRandomDateInTheFuture()
    {
        long randomLong = (long) (Math.random()*10000 + 1);
        return new Date(new java.util.Date().getTime() + randomLong);
    }
}
