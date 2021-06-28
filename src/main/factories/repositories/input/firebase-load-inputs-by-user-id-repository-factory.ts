import { LoadInputsByUserIdRepository } from "data/protocols/input/load-inputs-by-user-id-repository";
import { FirebaseLoadInputByUserIdRepository } from "infra/input/load-input-by-user-id-repository/firebase-load-input-by-user-id-repository/firebase-load-input-by-user-id-repository";

const makeFirebaseLoadInputsByUserIdRepositoryFactory =
  (): LoadInputsByUserIdRepository => new FirebaseLoadInputByUserIdRepository();

export { makeFirebaseLoadInputsByUserIdRepositoryFactory };
