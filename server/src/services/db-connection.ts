import mysql from "mysql2/promise"


const  db =await  mysql.createConnection(process.env.MYSQL_DB_NAME!)

export default db