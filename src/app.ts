import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo à API de gerenciamento de tarefas!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
