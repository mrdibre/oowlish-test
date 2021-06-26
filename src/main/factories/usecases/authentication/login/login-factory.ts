import { Authentication } from "domain/usecases/auth/auth";

import { Login } from "data/usecases/authentication/login/login";
import { makeLocalStorageFactory } from "main/factories/cache/local-storage/local-storage-factory";

const makeLoginFactory = (): Authentication => {
  const storage = makeLocalStorageFactory();

  return new Login(storage);
};

export { makeLoginFactory };
