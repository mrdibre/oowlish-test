import { Storage } from "../../../protocols/storage/storage";

import { Logout } from "./logout";
import { Authenticated } from "../authenticated/authenticated";

const makeStorage = () => {
  class StorageStub implements Storage {
    storage = new Map();

    clear(): void {}
    delete(key: string): void {
      this.storage.delete(key);
    }
    get(key: string): any {
      return this.storage.get(key);
    }
    set(key: string, value: any): void {
      this.storage.set(key, value);
    }
  }

  return new StorageStub();
};

const makeSut = () => {
  const storage = makeStorage();

  storage.set("user", {
    id: "valid_id",
    name: "valid_name",
    email: "valid_email",
  });

  const sut = new Logout(storage);
  const authenticated = new Authenticated(storage);

  return { sut, authenticated };
};

describe("Login", () => {
  test("Should return an user on success", async () => {
    const { sut, authenticated } = makeSut();

    expect(await authenticated.isAuthenticated()).toBe(true);

    await sut.logout();

    expect(await authenticated.isAuthenticated()).toBe(false);
  });
});
