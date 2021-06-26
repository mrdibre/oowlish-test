export enum HttpVerb {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  ERROR = 500,
}

export interface HttpRequest {
  url: string;
  data?: any;
  params?: any;
  method: keyof typeof HttpVerb;
}

export interface HttpResponse {
  data: any;
  status: HttpStatus;
}

export interface HttpClient {
  request(data: HttpRequest): Promise<HttpResponse>;
}
