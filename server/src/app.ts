import express, { json } from "express";
import db from "./services/db-connection.ts";
import connection from "./services/db-connection.ts";
import { Query } from "mysql2";
import cors from "cors";

let app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/city", async (req, res) => {
  const query = connection.query(
    "SELECT * FROM city limit 5;",
    (err, results, fields) => {
      res.send(results);
    }
  );

  query.on("end", () => console.log("done"));
});

app.listen(3000, () => console.log("opened server onport 3000..."));

export default app;
