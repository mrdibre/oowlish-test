import { AxiosResponse } from "axios";

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "data/protocols/http/http-client";
import { Axios } from "infra/http/axios/axios";

class AxiosAdapter implements HttpClient {
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

export { AxiosAdapter };
