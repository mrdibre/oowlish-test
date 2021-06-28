import { AddInput } from "domain/usecases/input/add-input";

import { RemoteAddInput } from "data/usecases/input/add-input/remote-add-input";
import { makeFirebaseAddInputRepositoryFactory } from "main/factories/repositories/input/firebase-add-input-repository-factory";

const makeRemoteAddInput = (): AddInput => {
  const addInputRepository = makeFirebaseAddInputRepositoryFactory();

  return new RemoteAddInput(addInputRepository);
};

export { makeRemoteAddInput };
