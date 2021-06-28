import { InputModel } from "domain/models/input/input";
import { LoadInputsByUserId } from "domain/usecases/input/load-inputs-by-user-id";
import { LoadInputsByUserIdRepository } from "data/protocols/input/load-inputs-by-user-id-repository";

class RemoteLoadInputsByUserId implements LoadInputsByUserId {
  constructor(
    private readonly loadInputsByUserIdRepository: LoadInputsByUserIdRepository
  ) {}

  async load(userId: string): Promise<InputModel[]> {
    const inputs = await this.loadInputsByUserIdRepository.load(userId);

    return inputs ?? [];
  }
}

export { RemoteLoadInputsByUserId };
