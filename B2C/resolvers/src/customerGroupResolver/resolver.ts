import dotenv from "dotenv";
dotenv.configDotenv({ path: "../../.env" });
import { request } from "graphql-request";
import { CustomerGroupDraft, CustomerGroup } from "@commercetools/platform-sdk";
import { createCustomerGroupMutation } from "@b2c/mutations";

const apiUrl = process.env.GQL_ENDPOINT ?? "";
const accessToken = process.env.ACCESS_TOKEN;

const mutation = createCustomerGroupMutation;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

const customerGroupDraft: CustomerGroupDraft = {
  key: "new-customer-group",
  groupName: "test-cust-group",
};

export const resolvers = {
  Mutation: {
    createCustomerGroup: async (_root: any, { draft }: any) => {
      const response: any = await request(
        apiUrl,
        mutation,
        {
          input: draft,
        },
        headers
      );
      return response.createCustomerGroup;
    },
  },
};
