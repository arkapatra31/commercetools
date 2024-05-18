import { Client, ClientBuilder, createAuthForClientCredentialsFlow, createHttpClient } from '@commercetools/sdk-client-v2';
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import fetch from 'node-fetch';

export const projectKey = 'mc-project-key';
const authMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
        clientId: 'mc-client-id',
        clientSecret: 'mc-client-secrets',
    },
    oauthUri: '/oauth/token', // - optional: custom oauthUri
    scopes: [`manage_project:${projectKey}`],
    fetch,
};

const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
};

const client: Client = new ClientBuilder()
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withUserAgentMiddleware()
    .build();

export const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);