import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFile } from "node:fs/promises";
import fs from "fs/promises";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./schema/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

async function startApolloServer() {
  //const typeDefs = await fs.readFile("schema.graphql", "utf-8"); //await readFile("./schema.graphql", "utf-8");
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 },
  });
  return url;
}
startApolloServer().then((url) => {
  console.log(url);
});
