package is.skutlarar.server.modelservice;

import is.skutlarar.server.misc.Log;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by olafurorn on 9/26/15.
 */
public class AbstractModelService
{
    private static final String LOGTAG = AbstractModelService.class.getSimpleName();

    public AbstractModelService()
    {
    }

    /*******************************************************************
     ****************** CONNECTIONS TO DATABASE ************************
     *******************************************************************/

    /**
     * NOTE: you shall always close the connection when calling this method
     *
     * @return the connection to the database
     * @throws URISyntaxException
     * @throws SQLException
     */
    protected Connection getConnectionToDatabase() throws URISyntaxException, SQLException
    {
        Log.i(LOGTAG, "Trying to get connection to database");
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
        }
        catch (ClassNotFoundException e)
        {
            Log.e(LOGTAG, "Could not connect to database, class 'com.mysql.jdbc.Driver' was not found", e);
            e.printStackTrace();
        }

        return DriverManager.getConnection("jdbc:mysql://"
                        + System.getenv("db_url") + ":3306" + "/" + System.getenv("db_name"),
                System.getenv("db_user"), System.getenv("db_password"));
    }

    protected void handleUriSyntaxExceptionWhenConnectionToDatabase(URISyntaxException e)
    {
        // TODO: senda import email
        Log.e(LOGTAG, null, e);
    }

    protected void handleSQLException(SQLException e)
    {
        // TODO: senda import email
        Log.e(LOGTAG, null, e);
    }
}
