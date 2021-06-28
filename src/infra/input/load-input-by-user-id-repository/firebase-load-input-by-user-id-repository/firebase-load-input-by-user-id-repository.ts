import { getDatabase } from "config/firebase";
import { InputModel } from "domain/models/input/input";
import { LoadInputsByUserIdRepository } from "data/protocols/input/load-inputs-by-user-id-repository";

class FirebaseLoadInputByUserIdRepository
  implements LoadInputsByUserIdRepository
{
  async load(userId: string): Promise<InputModel[]> {
    const ref = await getDatabase().ref(`/inputs/${userId}`);
    const values = (await ref.get()).toJSON();

    const entries = Object.entries(values ?? {}).reduce(
      (inputs, [id, input]) => inputs.concat({ id, ...input }),
      []
    );

    return entries ?? [];
  }
}

export { FirebaseLoadInputByUserIdRepository };
