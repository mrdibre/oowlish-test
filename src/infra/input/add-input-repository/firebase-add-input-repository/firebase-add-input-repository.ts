import { getDatabase } from "config/firebase";
import { InputModel } from "domain/models/input/input";
import { AddInputRepository } from "data/protocols/input/add-input-repository";

class FirebaseAddInputRepository implements AddInputRepository {
  async add({ userId, ...data }: Omit<InputModel, "id">): Promise<InputModel> {
    const value = await getDatabase()
      .ref(`/inputs/${userId}`)
      .push({
        userId,
        ...data,
      });

    return {
      id: value.key,
      ...(await value.get()).toJSON(),
    } as InputModel;
  }
}

export { FirebaseAddInputRepository };
