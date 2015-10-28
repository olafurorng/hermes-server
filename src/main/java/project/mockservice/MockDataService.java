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
            "1177370922");

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
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings(), getRandomProfilePic(), "Stupid_name",
                    getRandomPhoneNumber());

            int randomPrice = getRandomPrice();
            RiderListEntry riderListEntry = new RiderListEntry(user,
                    getRandomLocation(), getRandomLocation(), getRandomTimestamp(), randomPrice,
                    getRandomMessageForRider(), getRandomTimestamp(), getRandomNumberOfPeople());
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
                    getRandomEmail(), getRandomRatings(), getRandomNumberOfRatings(), getRandomProfilePic(), "Stupid_name",
                    getRandomPhoneNumber());


            int randomPrice = getRandomPrice();
            DriverListEntry driverListEntry = new DriverListEntry(user,
                    getRandomTimestamp(), getRandomTimestamp(), randomPrice, randomPrice + 3000,
                    getRandomNumberOfPeople(), getRandomCarDescription(), getRandomPlace(),
                    getRandomMessageForDriver(), getRandomTimestamp());
            driverListEntries.add(driverListEntry);
        }

        return driverListEntries;
    }

    private int getRandomPhoneNumber()
    {
        String phoneNumberAsString = "";
        int randomNumberBetween0And9;
        for (int i = 0; i < 7; i++)
        {
            randomNumberBetween0And9 = (int) (Math.random()*10);
            phoneNumberAsString += randomNumberBetween0And9;
        }

        return Integer.parseInt(phoneNumberAsString);
    }

    private int getRandomPrice()
    {
        int index = (int) (Math.random()*4);
        switch (index)
        {
            case 0:
                return 1000;
            case 1:
                return 2000;
            case 2:
                return 3000;
            default:
                return 4000;
        }
    }

    private int getRandomNumberOfPeople()
    {
        int index = (int) (Math.random()*4);
        switch (index)
        {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            default:
                return 4;
        }
    }

    private long getRandomTimestamp()
    {
        int index = (int) (Math.random()*4);
        switch (index)
        {
            case 0:
                return 1444783219;
            case 1:
                return 1444790419;
            case 2:
                return 1444791439;
            default:
                return 1444856239;
        }
    }

    private String getRandomMessageForRider()
    {
        int index = (int) (Math.random()*3);
        switch (index)
        {
            case 0:
                return "";
            case 1:
                return "Er í gula húsinu bakvið græna skúrinn fyrir ofan hæðina";
            default:
                return "Má alls ekki vera of seinn, Lorem Ipsum is simply dummy text of the printing and " +
                        "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" +
                        " since the 1500s, when an unknown printer";
        }
    }

    private String getRandomMessageForDriver()
    {
        int index = (int) (Math.random()*3);
        switch (index)
        {
            case 0:
                return "";
            case 1:
                return "Er með bjór og sterkt áfengi";
            default:
                return "Er með tipp topp þjónustu, tek aðeins við greiðslum fyrirfram áður en aksture hefst!";
        }
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

    private String getRandomPlace()
    {
        int index = (int) (Math.random()*4);
        switch (index)
        {
            case 0:
                return "Höfuðborgasvæðið";
            case 1:
                return "Miðbær";
            case 2:
                return "Akureyri";
            default:
                return "Höfuðborgarasvæðið og flugvöllur";
        }
    }

    private String getRandomCarDescription()
    {
        int index = (int) (Math.random()*4);
        switch (index)
        {
            case 0:
                return "Gulur Yaris";
            case 1:
                return "Hvítur Volvo - bílnúmer: DA-514";
            case 2:
                return "Land Cruiser jeppa";
            default:
                return "Svartri Teslu";
        }
    }
}

