# JDBC

JDBC is middle-ware between java and your DBMS (fr SGBD)

Uniform Resource Locator

```Java
package balmes.m2i.java.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {

	public static void main(String[] args) {
		String dbmsName = "mysql";
		String hostAdress = "localhost";
		String portAdress = "3306";
		String databaseName = "formation";
        String timeZoneDebugging = "?serverTimezone=UTC"
		String url = "jdbc:" + dbmsName + "://" + hostAdress + ":" + portAdress + "/" + databaseName+timeZoneDebugging;

		String user = "root";
		String password = "";

		Statement st = null;
		ResultSet rs = null;
		
		
		try {
			Connection cnn = DriverManager.getConnection(url, user, password);
			st = cnn.createStatement();
			rs = st.executeQuery("SELECT * FROM Personne"); // use executeQuery() for SELECT
			st.execute("UPDATE Personne SET Nom='foo' WHERE Nom='Schumacher'"); // use execute() for no result queries like UPDATE, 

		} catch (SQLException e) {e.printStackTrace();}
	}

}

```

for security reasons, you cannot have ? for table arguments of a preparedStatement

```Java
Statement st = conn.prepareStatement("SELECT * FROM ?");
st.setString(1,"maTable"); // is not allowed
```