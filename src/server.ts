import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";

config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

if (process.env.NODE_ENV === "development") {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "./dev/index.html"));
  });
} else if (process.env.NODE_ENV === "production") {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
