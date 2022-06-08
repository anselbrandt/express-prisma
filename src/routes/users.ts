import express, { Request, Response } from "express";
import { UserStore } from "../model/users";

const users = (store: UserStore) => {
  const r = express.Router();

  r.get("/", async (req: Request, res: Response) => {
    const results = await store.getAll();
    res.json(results);
  });

  r.post("/", async (req: Request, res: Response) => {
    const user = req.body;
    const result = await store.add(user);
    res.json(result);
  });

  r.put("/", (req: Request, res: Response) => {
    const note = req.body;
    console.log(note);
    res.send("ok");
  });

  r.delete("/", (req: Request, res: Response) => {
    const note = req.body;
    console.log(note);
    res.send("ok");
  });
  return r;
};

export default users;
