export let createCustomerGroupMutation = `
 mutation CreateCustomerGroup($input: CustomerGroupDraft!) {
    createCustomerGroup(draft: $input) {
      id
      key
      name
    }
  }`;
