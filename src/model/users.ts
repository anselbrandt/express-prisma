import { PrismaClient, User } from "@prisma/client";

export interface UserStore {
  getAll: () => any;
  add: (user: User) => any;
  update: () => void;
  remove: () => void;
}

export default function userStore(prisma: PrismaClient): UserStore {
  const getAll = async () => {
    const results = await prisma.user.findMany();
    return results;
  };
  const add = async (user: User) => {
    const result = await prisma.user.create({
      data: user,
    });
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
