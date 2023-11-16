import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { readFile } from "node:fs/promises";
// import fs from "fs/promises";
import { customerResolver, productResolver } from "@b2c/resolvers";
import { customersSchema, productsSchema } from "@b2c/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

async function startApolloServer() {
  //const typeDefs = await fs.readFile("schema.graphql", "utf-8"); //await readFile("./schema.graphql", "utf-8");
  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([customersSchema, productsSchema]),
    resolvers: mergeResolvers([customerResolver, productResolver]),
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 9000 },
  });
  return url;
}
startApolloServer().then((url) => {
  console.log(`Apollo Server Running at : ${url}`);
});
