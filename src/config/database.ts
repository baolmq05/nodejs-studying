// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        database: 'nodejspro',
        password: 'Lmqb@1080'
    });

    return connection;
}

export default getConnection;