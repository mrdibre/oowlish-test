import { RemoteLoadInputsByUserId } from "data/usecases/input/load-inputs-by-user-id/remote-load-inputs-by-user-id/remote-load-inputs-by-user-id";
import { makeFirebaseLoadInputsByUserIdRepositoryFactory } from "main/factories/repositories/input/firebase-load-inputs-by-user-id-repository-factory";

const makeRemoteLoadInputsByUserIdFactory = () => {
  const firebaseRepository = makeFirebaseLoadInputsByUserIdRepositoryFactory();

  return new RemoteLoadInputsByUserId(firebaseRepository);
};

export { makeRemoteLoadInputsByUserIdFactory };
