package project.service;

import misc.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.responseentities.subentities.DriverListEntry;
import project.responseentities.subentities.RiderListEntry;
import project.responseentities.subentities.User;
import project.service.exceptions.UnauthorizedException;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by olafurorn on 10/22/15.
 */
@Service
public class DriverRiderService extends AbstractService
{
    private final static String LOGTAG = DriverRiderService.class.getSimpleName();

    private final UserService userService;

    @Autowired
    public DriverRiderService(UserService userService)
    {

        this.userService = userService;
    }

    public void createDriverListEntry(
            int phoneNumber,
            int lowPrice,
            int highPrice,
            int numberOfPeople,
            String place,
            String carDescription,
            String message,
            long startTimeTimestamp,
            long endTimeTimestamp,
            String userId
            //String accessToken, TODO: check the accessToken)
    )
    {
        try
        {
            Connection connection = getConnectionToDatabase();

            final String sqlQuery = "INSERT  INTO " + DatabaseConstants.TABLE_DRIVER_ENTRY + " (" +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_PHONE_NUMBER + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_LOW_PRICE + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_HIGH_PRICE + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_NUMBER_OF_PEOPLE + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_PLACE + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_CAR_DESCRIPTION + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_MESSAGE + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_START_TIME + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_END_TIME + ", " +
                    DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_USER_ID
                    + ") VALUES (?,?,?,?,?,?,?,?,?,?);";
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setInt(1, phoneNumber);
            preparedStatement.setInt(2, lowPrice);
            preparedStatement.setInt(3, highPrice);
            preparedStatement.setInt(4, numberOfPeople);
            preparedStatement.setString(5, place);
            preparedStatement.setString(6, carDescription);
            preparedStatement.setString(7, message);
            preparedStatement.setLong(8, startTimeTimestamp);
            preparedStatement.setLong(9, endTimeTimestamp);
            preparedStatement.setString(10, userId);
            preparedStatement.execute();

            preparedStatement.close();
        }
        catch (URISyntaxException e)
        {
            Log.e(LOGTAG, "Couldn't create driver list entry because of URISyntaxException", e);
        }
        catch (SQLException e)
        {
            Log.e(LOGTAG, "Couldn't create driver list entry because of SQLException", e);
        }
    }

    public void createRiderListEntry(
            int phoneNumber,
            int price,
            int numberOfPeople,
            String location,
            String destination,
            String message,
            long pickUpTimeTimestamp,
            String userId
            // String accessToken, TODO: check the accessToken
    )
    {

        try
        {
            Connection connection = getConnectionToDatabase();

            final String sqlQuery = "INSERT  INTO " + DatabaseConstants.TABLE_RIDER_ENTRY + " (" +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PHONE_NUMBER + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PRICE + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_NUMBER_OF_PEOPLE + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_LOCATION + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_DESTINATION + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_MESSAGE + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PICK_UP_TIMESTAMP + ", " +
                    DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_USER_ID
                    + ") VALUES (?,?,?,?,?,?,?,?);";
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setInt(1, phoneNumber);
            preparedStatement.setInt(2, price);
            preparedStatement.setInt(3, numberOfPeople);
            preparedStatement.setString(4, location);
            preparedStatement.setString(5, destination);
            preparedStatement.setString(6, message);
            preparedStatement.setLong(7, pickUpTimeTimestamp);
            preparedStatement.setString(8, userId);
            preparedStatement.execute();

            preparedStatement.close();
        }
        catch (URISyntaxException e)
        {
            Log.e(LOGTAG, "Couldn't create rider list entry because of URISyntaxException", e);
        }
        catch (SQLException e)
        {
            Log.e(LOGTAG, "Couldn't create rider list entry because of SQLException", e);
        }
    }

    public List<DriverListEntry> getDriverListEntry()
    {
        List<DriverListEntry> driverListEntryList = new ArrayList<DriverListEntry>();
        try
        {
            Connection connection = getConnectionToDatabase();

            final String sqlQueryUsers = "SELECT * FROM users;";
            PreparedStatement preparedStatementUsers = connection.prepareStatement(sqlQueryUsers);
            ResultSet resultSetUsers = preparedStatementUsers.executeQuery();


            final String sqlQuery = "SELECT * FROM " + DatabaseConstants.TABLE_DRIVER_ENTRY + ";"; // TODO: don't select everything because it is too expensive operation
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next())
             {
                 User user = null;
                 while(resultSetUsers.previous()) {}
                 while(resultSetUsers.next()) {
                     if (resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID).equals(
                             resultSet.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID))) {
                        final String name = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_NAME);
                        final String id = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID);
                        final String email = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_EMAIL);
                        final double starRating = resultSetUsers.getDouble(DatabaseConstants.TABLE_USERS_COLUMN_STAR_RATING);
                        final int numberOfStarRatings = resultSetUsers.getInt(DatabaseConstants.TABLE_USERS_COLUMN_NUMBER_OF_STAR_RATINGS);
                        final String accessTokenFromDatabase = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_ACCESS_TOKEN);
                        final String pictureUrl = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_PICTURE_URL);
                        final String firstName = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_FIRST_NAME);
                        Log.i(LOGTAG, "User, id: " + id + ", does exist in database, return user");
                        user = new User(accessTokenFromDatabase, id, name, email, starRating, numberOfStarRatings,
                                pictureUrl, firstName,
                                null);
                        break;
                    }
                }
                if (user == null)
                {
                    Log.w(LOGTAG, "user not found in database when selecting drivers - skipping this driver list entry");
                    continue;
                }

                DriverListEntry driverListEntry = new DriverListEntry(
                        user,
                        resultSet.getLong(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_START_TIME),
                        resultSet.getLong(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_END_TIME),
                        resultSet.getInt(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_LOW_PRICE),
                        resultSet.getInt(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_HIGH_PRICE),
                        resultSet.getInt(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_NUMBER_OF_PEOPLE),
                        resultSet.getString(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_CAR_DESCRIPTION),
                        resultSet.getString(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_PLACE),
                        resultSet.getString(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_MESSAGE),
                        new Date().getTime(),
                        resultSet.getInt(DatabaseConstants.TABLE_DRIVER_ENTRY_COLUMN_PHONE_NUMBER)); // TODO: store when the dri  ver list entry was created


                driverListEntryList.add(driverListEntry);
            }

            resultSet.close();
            resultSetUsers.close();
            preparedStatementUsers.close();
            preparedStatement.close();
        }
        catch (URISyntaxException e)
        {
            Log.e(LOGTAG, "Couldn't get user", e);
        }
        catch (SQLException e)
        {
            Log.e(LOGTAG, "Couldn't get user -- possible because it is new user, or it failed getting user");
        }


        return driverListEntryList;
    }

    public List<RiderListEntry> getRiderListEntry()
    {
        List<RiderListEntry> riderListEntryList = new ArrayList<RiderListEntry>();
        try
        {
            Connection connection = getConnectionToDatabase();

            final String sqlQueryUsers = "SELECT * FROM users;";
            PreparedStatement preparedStatementUsers = connection.prepareStatement(sqlQueryUsers);
            ResultSet resultSetUsers = preparedStatementUsers.executeQuery();

            final String sqlQuery = "SELECT * FROM " + DatabaseConstants.TABLE_RIDER_ENTRY + ";"; // TODO: don't select everything because it is too expensive operation
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next())
            {
                User user = null;
                while(resultSetUsers.previous()) {}
                 while(resultSetUsers.next()) {
                     if (resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID).equals(
                             resultSet.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID))) {
                        final String name = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_NAME);
                        final String id = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_USER_ID);
                        final String email = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_EMAIL);
                        final double starRating = resultSetUsers.getDouble(DatabaseConstants.TABLE_USERS_COLUMN_STAR_RATING);
                        final int numberOfStarRatings = resultSetUsers.getInt(DatabaseConstants.TABLE_USERS_COLUMN_NUMBER_OF_STAR_RATINGS);
                        final String accessTokenFromDatabase = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_ACCESS_TOKEN);
                        final String pictureUrl = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_PICTURE_URL);
                        final String firstName = resultSetUsers.getString(DatabaseConstants.TABLE_USERS_COLUMN_FIRST_NAME);
                        user = new User(accessTokenFromDatabase, id, name, email, starRating, numberOfStarRatings,
                                pictureUrl, firstName,
                                null);
                        break;
                    }
                }

                if (user == null)
                {
                    Log.w(LOGTAG, "user not found in database when selecting riders - skipping this rider list entry");
                    continue;
                }

                RiderListEntry riderListEntry = new RiderListEntry(
                        user,
                        resultSet.getString(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_LOCATION),
                        resultSet.getString(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_DESTINATION),
                        resultSet.getLong(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PICK_UP_TIMESTAMP),
                        resultSet.getInt(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PRICE), // TODO: store high and low price seperately
                        resultSet.getString(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_MESSAGE),
                        new Date().getTime(), // TODO: store when the driver list entry was created
                        resultSet.getInt(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_NUMBER_OF_PEOPLE),
                        resultSet.getInt(DatabaseConstants.TABLE_RIDER_ENTRY_COLUMN_PHONE_NUMBER));

                riderListEntryList.add(riderListEntry);
            }

            resultSet.close();
            preparedStatement.close();
        }
        catch (URISyntaxException e)
        {
            Log.e(LOGTAG, "Couldn't get user", e);
        }
        catch (SQLException e)
        {
            Log.e(LOGTAG, "Couldn't get user -- possible because it is new user, or it failed getting user");
        }


        return riderListEntryList;
    }
}
