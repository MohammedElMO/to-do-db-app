import express, { json, Request } from "express";
// import db from "./services/db-connection.js";
import { Query } from "mysql2";
import cors from "cors";
import { client } from "./services/db-connection.js";

let app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
    // optionsSuccessStatus: 200,
  })
);

// app.get("/api/city", async (req: Request, res) => {
//   console.log(req.query.champ);
//   const query = db.query(
//     "SELECT name FROM city where name LIKE '%k%' limit 10",
//     (err, results, fields) => {
//       res.send(results);
//       console.log(fields);
//       console.log(err);
//     }
//   );

//   query.on("end", () => console.log("done"));
// });

app.post("/api/saveToDo", async (req: Request, res) => {
  console.log(req.body);
  await client.connect();
  const query = await client.query(
    "insert into todos (id,todo) values (null,$1)",
    [req.body.todo]
  );

  res.send(query.fields);
});

app.get("/api/todos", async (req: Request, res) => {
  await client.connect();
  const query = await client.query("SELECT * FROM todos");

  res.send(query.fields);
  console.log(query.rows[0]);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("opened server onport 3000..."));

export default app;
