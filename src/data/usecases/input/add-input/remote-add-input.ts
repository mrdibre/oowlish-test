import { InputModel } from "domain/models/input/input";
import { AddInput } from "domain/usecases/input/add-input";
import { AddInputRepository } from "data/protocols/input/add-input-repository";

class RemoteAddInput implements AddInput {
  constructor(private readonly addInputRepository: AddInputRepository) {}

  async add(data: Omit<InputModel, "id">): Promise<InputModel> {
    return this.addInputRepository.add(data);
  }
}

export { RemoteAddInput };
