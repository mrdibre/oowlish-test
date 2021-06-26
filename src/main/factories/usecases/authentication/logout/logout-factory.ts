import { SignOut } from "domain/usecases/auth/auth";
import { Logout } from "data/usecases/authentication/logout/logout";
import { makeLocalStorageFactory } from "main/factories/cache/local-storage/local-storage-factory";

const makeLogoutFactory = (): SignOut => {
  const storage = makeLocalStorageFactory();

  return new Logout(storage);
};

export { makeLogoutFactory };
