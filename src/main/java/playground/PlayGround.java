package playground;

import misc.Log;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by olafurorn on 9/29/15.
 *
 * Dummy class, not needed for production
 *
 * Used for
 */
public class PlayGround
{
    private static final String LOGTAG = PlayGround.class.getSimpleName();

    public static void main(String[] args)
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

        Log.d(LOGTAG, "db url: " + "jdbc:mysql://"
                + System.getenv("hermes_db_url") /*+ ":3306"*/ + "/" + System.getenv("hermes_db_name"));
        Log.d(LOGTAG, "hermes_db_user: " + System.getenv("hermes_db_user"));
        Log.d(LOGTAG, "hermes_db_password: " + System.getenv("hermes_db_password"));
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://"
                            + System.getenv("hermes_db_url") /*+ ":3306"*/ + "/" + System.getenv("hermes_db_name"),
                    System.getenv("hermes_db_user"), System.getenv("hermes_db_password"));

            String breakp = "";
        } catch (SQLException e) {
            Log.e(LOGTAG, e);
        }
        catch (Exception e)
        {
            Log.e(LOGTAG, e);
        }
    }
}