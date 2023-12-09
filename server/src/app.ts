import express, { json, Request } from "express";
import cors from "cors";
import "dotenv/config";
import pool from "./services/db-connection.js";

let app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/saveToDo", async (req: Request, res) => {
  const query = await pool.sql`
    insert into todos (Id,Todo) values (${req.body.id},${req.body.todo})
   `;
  console.log(query.rows);
  res.send("great");
});

app.get("/api/todos", async (req: Request, res) => {
  const query = await pool.sql`
    SELECT * FROM todos `;

  res.send(query.rows);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("opened server onport 3000..."));

export default app;
