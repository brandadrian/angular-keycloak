import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Todo, todosData } from "./database/todos";
import { keycloak } from "./middleware";

const app = express();
const port = 9090;
const todos: Todo[] = todosData;
// Default protected routes that required a valid bearer token.
const protectedRoutes = keycloak.protect();

app.use(
  cors({
    origin: true
  }),
  bodyParser.json(),
  keycloak.middleware()
);

app.get("/todos", keycloak.protect('realm:brandclient-role-admin'), (req: Request, res: Response) => {
  res.json(todos);
});

app.get("/todos-first", keycloak.protect('realm:brandclient-role-user'), (req: Request, res: Response) => {
  res.json(todos[0]);
});

app.get("/todos/:id", protectedRoutes, (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find((m) => m.id === todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
