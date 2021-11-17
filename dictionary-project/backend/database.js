const mysql = require("mysql");
const databaseConfig = require("./database.config");

// Create a connection to the database
const connection = mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;