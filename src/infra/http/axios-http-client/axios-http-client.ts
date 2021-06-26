import { AxiosResponse } from "axios";

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "data/protocols/http/HttpClient";
import { Axios } from "infra/http/axios-http-client/axios";

class AxiosHttpClient implements HttpClient {
  async request({
    data,
    url,
    method,
    params,
  }: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse;

    try {
      response = await Axios.getInstance().request({
        url,
        data,
        method,
        params,
      });
    } catch (error) {
      response = error.response;
    }

    return response;
  }
}

export { AxiosHttpClient };
