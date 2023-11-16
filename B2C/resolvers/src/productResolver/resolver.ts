import dotenv from "dotenv";
dotenv.configDotenv({ path: "../../.env" });
import axios from "axios";
import { getProducts } from "@b2c/queries";

const apiUrl = process.env.GQL_ENDPOINT ?? "";
const accessToken = process.env.ACCESS_TOKEN;
const query = getProducts;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

export const resolvers = {
  Query: {
    getProducts: async (_root: any, { limit }: any) => {
      let resp = await axios.post(apiUrl, { query }, { headers });
      return resp.data.data.products.results;
    },
  },
};
