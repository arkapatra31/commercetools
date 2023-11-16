import axios from "axios";
import { fetchCustomersQuery } from "../queries/fetchCustomer";
const apiUrl =
  "https://api.australia-southeast1.gcp.commercetools.com/glass-onion/graphql";
const query = fetchCustomersQuery;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer e1F4QNtEDxTnhpOV4MMyhC6zqHCoLL27`,
};
export const resolvers = {
  Query: {
    fetchCustomers: async (_root: any, { limit }: any) => {
      let resp = await axios.post(apiUrl, { query }, { headers });
      return resp.data.data.customers.results;
    },
  },
};
