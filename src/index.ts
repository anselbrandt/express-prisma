import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import express, { Express } from "express";
import NoteStore from "./model/notes";
import UserStore from "./model/users";
import router from "./routes";
dotenv.config();

async function main() {
  const app: Express = express();
  const port = process.env.PORT || 5000;

  const prisma = new PrismaClient();

  const noteStore = NoteStore(prisma);
  const userStore = UserStore(prisma);

  const r = router;

  app.use("/api/graphql", r.graphql(noteStore));
  app.use(bodyParser.json());
  app.use("/images", r.images);
  app.use("/api/notes", r.notes(noteStore));
  app.use("/api/users", r.users(userStore));
  app.use("/", r.web);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
}

main().catch((error) => console.log(error));
