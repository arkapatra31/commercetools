import { apiRoot, projectKey } from "@sdk/apiclient";
export async function productSearch() {
    return (await apiRoot.withProjectKey({ projectKey }).productProjections().search().get().execute()).body;
}