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

  test("Should return an input on success", async () => {
    const { sut } = makeSut();

    const { id, ...data } = makeFakeInput();

    const input = await sut.add(data);

    expect(input).toEqual({ id, ...data });
  });

  test("Should throws if HttpClient throws", async () => {
    const { sut, httpClient } = makeSut();

    jest.spyOn(httpClient, "request").mockImplementationOnce(() => {
      throw new Error();
    });

    const { id, ...data } = makeFakeInput();

    const promise = sut.add(data);

    await expect(promise).rejects.toThrow(new Error());
  });
});
