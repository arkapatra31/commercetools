import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    createCustomerGroup(draft: CustomerGroupDraft!): CustomerGroupResult
  }

  type CustomerGroupResult {
    id: String!
    key: String
    name: String!
  }

  input CustomerGroupDraft {
    groupName: String!
    key: String
  }
`;
