import { InputModel } from "@oowlish/domain/models/input/input";
import { AddInput } from "@oowlish/domain/usecases/input/add-input";
import { HttpClient, HttpVerb } from "@oowlish/data/protocols/http/HttpClient";

class RemoteAddInput implements AddInput {
  constructor(private readonly httpClient: HttpClient) {}

  async add(data: Omit<InputModel, "id">): Promise<InputModel> {
    const input = await this.httpClient.request({
      data,
      url: "/input",
      method: HttpVerb.POST,
    });

    if (input.statusCode === 201) {
      return input.data as InputModel;
    }

    throw input.error;
  }
}

export { RemoteAddInput };
