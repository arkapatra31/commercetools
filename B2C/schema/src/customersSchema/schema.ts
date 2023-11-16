import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Query {
    fetchCustomers(limit: Int): [CustomerResult]
  }

  type CustomerResult {
    id: String!
    email: String!
    firstName: String!
    lastName: String!
  }
`;
