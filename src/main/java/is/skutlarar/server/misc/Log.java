package is.skutlarar.server.misc;

/**
 * Created by olafurorn on 9/26/15.
 */
public class Log
{
    /**
     * Message used for debugging
     *
     * @param msg
     */
    public static void d(String logtag, String msg)
    {
        System.out.println("_______DEBUG_____ " + "{" + logtag + "} --> " + msg);
    }

    /**
     * Message used for information
     *
     * @param msg
     */
    public static void i(String logtag, String msg)
    {
        System.out.println("{" + logtag + "} --> " + msg);
    }

    /**
     * Message used for information
     *
     * @param msg
     */
    public static void e(String logtag, String msg, Exception e)
    {
        System.out.println("==== ERROR ==== {" + logtag + "} --> msg: " + msg + " --- ex-stacktrace: ");
        e.printStackTrace();
    }
}
