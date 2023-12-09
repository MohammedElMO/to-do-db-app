import { Connection, createConnection } from "mysql2";
// import mysql from 'mysql2/promise';

const connection: Connection = createConnection({
  host: "localhost",
  user: "root",
  database: "world",
  port: 3305,
  password: "root",
});

export default connection;
