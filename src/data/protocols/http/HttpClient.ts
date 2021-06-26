export enum HttpVerb {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
}

export interface HttpRequest {
  url: string;
  data?: any;
  params?: any;
  method: keyof typeof HttpVerb;
}

export interface HttpResponse {
  data?: any;
  error?: any;
  statusCode: number;
}

export interface HttpClient {
  request(data: HttpRequest): Promise<HttpResponse>;
}
