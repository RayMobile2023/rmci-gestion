import mysql from "mysql";
import dotenv from "dotenv";
import fs from "fs"

dotenv.config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_PORT } = process.env;

const config_db = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  port: MYSQL_PORT,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  ssl: {
    ca: fs.readFileSync("../ssl/ca.pem"),
    rejectUnauthorized: true,
  },
};


export const db = mysql.createConnection(config_db);

db.connect((err, connection) => {
	if (err) throw err;
	console.log('🗃  DB connected successful: ' + connection.threadId);
	connection.release();
});
