import { AxiosAdapter } from "infra/http/axios/axios-adapter";

const makeAxiosHttpClient = () => new AxiosAdapter();

export { makeAxiosHttpClient };
