import { AxiosHttpClient } from "infra/http/axios-http-client/axios-http-client";

const makeAxiosHttpClient = () => new AxiosHttpClient();

export { makeAxiosHttpClient };
