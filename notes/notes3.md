# Design Pattern

design pattern =(fr) patron de conception

23 design patterns generiques + design patterns "entreprise"



## Design Pattern Singleton

ex: pool de connexions

1. constructor must be private
    => new cannot be used
2. Use a static attribute to contain the unique instance
3. Use a static method to *get* the unique instance

```java
public class SingleConnection{
    private static java.sql.Connection _instance = null;

    private Connexion(){
    }

    public static java.sql.Connection getInstance(String url, String user, String pwd){
        if(_instance == null)
            _instance = DriverManager.getConnection(url, user, pwd); // needs try catch
        return _instance;
    }
}
```
* is not thread safe

Thread safe version:

```java
public class SingleConnection{
    private static java.sql.Connection _instance = null;

    private Connexion(){
    }

    public static java.sql.Connection getInstance(String url, String user, String pwd){
        if(_instance == null)
            synchronized(Connexion.class)    
                if(_instance == null)
                    _instance = DriverManager.getConnection(url, user, pwd); // needs try catch
        return _instance;
    }
}
```

## Design Pattern DAO (aka Repository)

DAO = Data Access Object

interfaces your OOP objects with your Relational DB entries

At least implements CRUD operations => DAO interface:

```Java
public interface DAO<T> {	
	public int create(T obj);	
	public T retrieve(int id);	
	public List<T> retrieveAll();	
	public int delete(int id);	
	public int update(T obj);
}
```

# Java

## Abstract methods

static methods cannot be abstract and cannot be overriden


# Threads

thread =(fr) unité d'exécution

l'OS alloue des quantum de temps aux threads, pas aux applications

synchronized crée un verrou sur un morceau de code quand un thread y entre
