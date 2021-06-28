import { AddInputRepository } from "data/protocols/input/add-input-repository";
import { FirebaseAddInputRepository } from "infra/input/add-input-repository/firebase-add-input-repository/firebase-add-input-repository";

const makeFirebaseAddInputRepositoryFactory = (): AddInputRepository =>
  new FirebaseAddInputRepository();

export { makeFirebaseAddInputRepositoryFactory };
