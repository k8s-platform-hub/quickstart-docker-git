import static spark.Spark.get;
import static spark.Spark.port;

/**
 * Created by jaison on 08/03/17.
 */
public class Main {

    public static void main(String[] args) {
        port(getPort());
        get("/", (req, res) -> "Hello There");
    }

    //Getting the port
    private static int getPort() {
        String portString = System.getenv("PORT");
        int envPort = 8080;
        if (portString != null) {
            if (portString.length() > 0) {
                int portInt = Integer.parseInt(portString);
                if (portInt != -1)
                    envPort = portInt;
            }
        }
        return envPort;
    }
}
