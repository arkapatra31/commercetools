import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = await readFile("./schema.graphql", "utf-8");
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);
