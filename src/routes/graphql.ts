import { PrismaClient } from "@prisma/client";
import { graphqlHTTP } from "express-graphql";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

const graphql = async (prisma: PrismaClient) => {
  const schema = await buildSchema({
    resolvers: resolvers,
    validate: false,
  });
  return graphqlHTTP({
    schema: schema,
    context: (): Context => ({ prisma }),
    graphiql: true,
  });
};

export default graphql;
