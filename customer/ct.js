import axios from "axios";

const apiUrl =
  "https://api.australia-southeast1.gcp.commercetools.com/glass-onion/graphql";
const accessToken = "e1F4QNtEDxTnhpOV4MMyhC6zqHCoLL27";

const query = `
  query {
    customers {
      results {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

axios
  .post(apiUrl, { query }, { headers })
  .then((response) => {
    const customers = response.data.data.customers.results;
    console.log("Fetched Customers:", customers);
  })
  .catch((error) => {
    console.error("Error fetching customers:", error.message);
  });
