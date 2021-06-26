import Mockdate from "mockdate";

import { InputModel, InputType } from "@oowlish/domain/models/input/input";
import {
  HttpVerb,
  HttpClient,
  HttpRequest,
} from "@oowlish/data/protocols/http/HttpClient";

import { RemoteAddInput } from "./remote-add-input";

const makeFakeInput = (): InputModel => ({
  id: "valid_id",
  date: Date.now(),
  userId: "user_id",
  type: InputType.EXITING,
});

const makeHttpClientStub = () => {
  class HttpClientStub implements HttpClient {
    async request(data: HttpRequest) {
      return {
        statusCode: 201,
        data: makeFakeInput(),
      };
    }
  }

  return new HttpClientStub();
};

const makeSut = () => {
  const httpClient = makeHttpClientStub();
  const sut = new RemoteAddInput(httpClient);

  return {
    sut,
    httpClient,
  };
};

describe("RemoteAddInput", () => {
  beforeAll(() => {
    Mockdate.set(new Date());
  });

  afterAll(() => {
    Mockdate.reset();
  });

  test("Should call HttpClient with correct values", async () => {
    const { sut, httpClient } = makeSut();

    const { id: _, ...data } = makeFakeInput();

    const spy = jest.spyOn(httpClient, "request");

    await sut.add(data);

    expect(spy).toHaveBeenCalledWith({
      data,
      url: "/input",
      method: HttpVerb.POST,
    });
  });
});
