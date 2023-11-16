import dotenv from "dotenv";
dotenv.configDotenv({ path: "../../.env" });
import axios from "axios";
import { getCustomersQuery } from "@b2c/queries";

const apiUrl = process.env.GQL_ENDPOINT ?? "";
const accessToken = process.env.ACCESS_TOKEN;

const query = getCustomersQuery;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

export const resolvers = {
  Query: {
    fetchCustomers: async (_root: any, { limit }: any) => {
      let resp = await axios.post(apiUrl, { query }, { headers });
      return resp.data.data.customers.results;
    },
  },
};
