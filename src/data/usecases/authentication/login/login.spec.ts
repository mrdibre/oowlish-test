import { Storage } from "../../../protocols/storage/storage";

import { Login } from "./login";

jest.mock("uuid", () => ({
  v4() {
    return "any_id";
  },
}));

const makeStorage = () => {
  class StorageStub implements Storage {
    clear(): void {}
    delete(key: string): void {}
    get(key: string): any {}
    set(key: string, value: any): void {}
  }

  return new StorageStub();
};

const makeSut = () => {
  const storage = makeStorage();
  const sut = new Login(storage);

  return { sut };
};

describe("Login", () => {
  test("Should return an user on success", async () => {
    const { sut } = makeSut();

    const user = await sut.login("any_name", "any_email");

    expect(user).toEqual({
      id: "any_id",
      name: "any_name",
      email: "any_email",
    });
  });
});
