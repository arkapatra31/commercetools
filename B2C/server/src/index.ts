import dotenv from "dotenv";
dotenv.configDotenv({ path: "../../.env" });
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { readFile } from "node:fs/promises";
// import fs from "fs/promises";
import {
  customerResolver,
  productResolver,
  customerGroupResolver,
} from "@b2c/resolvers";
import {
  customersSchema,
  productsSchema,
  customerGroupSchema,
} from "@b2c/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const port = parseInt(process.env.PORT ?? "9000");

async function startApolloServer() {
  //const typeDefs = await fs.readFile("schema.graphql", "utf-8"); //await readFile("./schema.graphql", "utf-8");
  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
      customersSchema,
      productsSchema,
      customerGroupSchema,
    ]),
    resolvers: mergeResolvers([
      customerResolver,
      productResolver,
      customerGroupResolver,
    ]),
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: port },
  });
  return url;
}
startApolloServer().then((url) => {
  console.log(`Apollo Server Running at : ${url}`);
});
