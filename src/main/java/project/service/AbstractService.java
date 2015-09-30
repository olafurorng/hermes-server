package project.service;

import misc.Log;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by olafurorn on 9/29/15.
 */
public abstract class AbstractService
{
    private static final String LOGTAG = AbstractService.class.getSimpleName();

    private final int VALID_TIMEOUT = 3000; // TODO: setja einhverja viturlega tölu hérna, ekki e-ð random


    private Connection connection;

    /**
     * Get Connection to the temp database @heroku
     */
    protected Connection getConnectionToDatabase() throws URISyntaxException, SQLException
    {
        Log.d(LOGTAG, "Trying to get connection to database");
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
        }
        catch (ClassNotFoundException e)
        {
            Log.e(LOGTAG, "Could not connect to database, class 'com.mysql.jdbc.Driver' was not found", e);
        }

        // TODO: viljum við nota '!connection.isValid(VALID_TIMEOUT)'
        if  (connection == null || connection.isClosed() || !connection.isValid(VALID_TIMEOUT))
        {
            connection = DriverManager.getConnection("jdbc:mysql://"
                            + System.getenv("hermes_db_url") /*+ ":3306"*/ + "/" + System.getenv("hermes_db_name"),
                    System.getenv("hermes_db_user"), System.getenv("hermes_db_password"));
        }

        return connection;
    }
}
