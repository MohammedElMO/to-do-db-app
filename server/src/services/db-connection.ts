import { Connection, createConnection } from "mysql2";
// import mysql from 'mysql2/promise';
import { Client } from "pg";

const connection: Connection = createConnection({
  host: "localhost",
  user: "root",
  database: "world",
  port: 3305,
  password: "root",
});

export const client = new Client({ ssl: true });

export default connection;
