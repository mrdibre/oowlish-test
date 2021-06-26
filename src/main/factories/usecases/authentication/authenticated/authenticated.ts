import { Auth } from "domain/usecases/auth/auth";

import { Authenticated } from "data/usecases/authentication/authenticated/authenticated";
import { makeLocalStorageFactory } from "main/factories/cache/local-storage/local-storage-factory";

const makeAuthenticatedFactory = (): Auth => {
  const storage = makeLocalStorageFactory();

  return new Authenticated(storage);
};

export { makeAuthenticatedFactory };
