import { Note, PrismaClient } from "@prisma/client";

export interface NoteStore {
  getAll: () => any;
  add: (note: Note) => any;
  update: () => void;
  remove: () => void;
}

export default function noteStore(prisma: PrismaClient): NoteStore {
  const getAll = async () => {
    const results = await prisma.note.findMany();
    return results;
  };
  const add = async (note: Note) => {
    const result = await prisma.note.create({
      data: note,
    });
    console.log(result);
    return result;
  };
  const update = () => {};
  const remove = () => {};
  return {
    getAll,
    add,
    update,
    remove,
  };
}

// SELECT * FROM notes ORDER BY updatedAt;
