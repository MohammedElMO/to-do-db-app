import express, { json, Request } from "express";
import cors from "cors";
import "dotenv/config";
import db from "./services/db-connection.js";

let app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await db.query("SELECT * FROM TODOS");
    console.log(todos);
  } catch (error) {
    console.log(error)
  }

  // res.send(todos);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("opened server onport 3000..."));

export default app;
