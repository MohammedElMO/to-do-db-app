import express, { json, Request } from "express";
import db from "./services/db-connection.ts";
import { Query } from "mysql2";
import cors from "cors";

let app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
    // optionsSuccessStatus: 200,
  })
);

app.get("/api/city", async (req: Request, res) => {
  console.log(req.query.champ);
  const query = db.query(
    "SELECT name FROM city where name LIKE '%k%' limit 10",
    (err, results, fields) => {
      res.send(results);
      console.log(fields);
      console.log(err);
    }
  );

  query.on("end", () => console.log("done"));
});

app.post("/api/saveToDo", async (req: Request, res) => {
  console.log(req.body);
  const query = db.execute(
    "insert into todos (id,todo) values (null,?)",
    [req.body.todo],
    (err, results, fields) => {
      res.send(results);
      console.log(fields);
      console.log(err);
    }
  );
  query.on("end", () => console.log("done"));
});

app.get("/api/todos", async (req: Request, res) => {
  console.log(req.query.champ);
  const query = db.query("SELECT * FROM todos ", (err, results, fields) => {
    res.send(results);
    console.log(fields);
    console.log(err);
  });

  query.on("end", () => console.log("done"));
});
app.listen(3000, () => console.log("opened server onport 3000..."));

export default app;
