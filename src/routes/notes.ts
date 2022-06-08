import express, { Request, Response } from "express";
import { NoteStore } from "../model/notes";

const notes = (store: NoteStore) => {
  const r = express.Router();

  r.get("/", async (req: Request, res: Response) => {
    const results = await store.getAll();
    res.json(results);
  });

  r.post("/", async (req: Request, res: Response) => {
    const note = req.body;
    const response = await store.add(note);
    res.json(response);
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

export default notes;
