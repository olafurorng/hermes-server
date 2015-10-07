package misc;

/**
 * Created by olafurorn on 9/29/15.
 *
 * Wrapper for logging
 */
public class Log
{
    /**
     * Information logging
     */
    public static void i(final String LOGTAG, final String msg)
    {
        System.out.println("info - " + LOGTAG + " : " + msg);
    }

    /**
     * Debug logging
     */
    public static void d(final String LOGTAG, final String msg)
    {
        System.out.println("debug - " + LOGTAG + " : " + msg);
    }

    /**
     * Warnign logging
     */
    public static void w(final String LOGTAG, final String msg)
    {
        System.out.println("warning - " + LOGTAG + " : " + msg);
    }

    /**
     * Warnign logging
     */
    public static void w(final String LOGTAG, Exception e)
    {
        System.out.println("warning - " + LOGTAG);
        System.out.println(" - STACKTRACE: ");
        e.printStackTrace();;
    }

    /**
     * Error logging
     */
    public static void e(final String LOGTAG, final Exception e)
    {
        Log.e(LOGTAG, "no-message", e);
    }

    /**
     * Error logging
     */
    public static void e(final String LOGTAG, final String msg)
    {
        Log.e(LOGTAG, msg, null);
    }

    /**
     * Error logging
     */
    public static void e(final String LOGTAG, final String msg, final Exception e)
    {
        System.out.print("ERROR - " + LOGTAG + " : " + msg);

        if (e != null)
        {
            System.out.println(" - STACKTRACE: ");
            e.printStackTrace();
        }
        else
        {
            System.out.println();
        }
    }


}
