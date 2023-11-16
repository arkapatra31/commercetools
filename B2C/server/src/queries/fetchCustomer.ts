export let fetchCustomersQuery = `
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
