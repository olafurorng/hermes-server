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
            "Susan Boil");

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

    private final List<String> profilePics = Arrays.asList(
            "https://qph.is.quoracdn.net/main-thumb-1392447-50-jF3quI18qiBOm9aeQDBtBsaBsCq6p2rp.jpeg",
            "https://qph.is.quoracdn.net/main-thumb-353-50-bzZD7XQANRYP8IejwdfadBEcFJx8AO8m.jpeg",
            "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c0.13.50.50/p50x50/21960_327711850629_2752763_n.jpg?oh=cfcf7779776a6c94df2469bd4ad6dba0&oe=565F95B0&__gda__=1453307283_9e2499c8a311f47a199392d5c99fe836",
            "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c16.19.50.50/p86x86/10985467_597016006076_2481139254452985815_n.jpg?oh=e75e96ba9ad084cd7acc2bc51a297d3d&oe=568D2956&__gda__=1452158311_66b0d2454a023ea63049a56eba895262"
    );


    public MockDataService()
    {

    }

    public List<RiderListEntry> getMockRiderList()
    {
        List<RiderListEntry> riderListEntries = new ArrayList<RiderListEntry>();

        for (int i = 0; i < NUMBER_OF_MOCK_RIDER; i++)
        {
            User user = new User("test_access_token", getRandomId(), getRandomName(),
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings(), getRandomProfilePic());

            RiderListEntry riderListEntry = new RiderListEntry(user,
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
            User user = new User("test_access_token", getRandomId(), getRandomName(),
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings(), getRandomProfilePic());


            DriverListEntry driverListEntry = new DriverListEntry(user,
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

    private String getRandomProfilePic()
    {
        int index = (int) (Math.random()*profilePics.size());
        return profilePics.get(index);
    }
}

