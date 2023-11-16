import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Query {
    getProducts(limit: Int): [ProductResultSet]
  }

  type ProductResultSet {
    id: String!
    key: String
    version: Int!
    skus: [String]
    productType: ProductType
    masterData: MasterData
  }
  type ProductType {
    key: String!
    name: String!
  }
  type MasterData {
    current: CurrentData
  }
  type CurrentData {
    name: String
    description: String
  }
`;
