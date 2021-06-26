import { Storage } from "../../../protocols/storage/storage";
import { Authenticated } from "./authenticated";

const makeFakeUser = () => ({
  id: "valid_id",
  name: "valid_name",
  email: "valid_email",
});

const makeStorage = () => {
  class StorageStub implements Storage {
    clear(): void {}
    delete(key: string, value: any): void {}
    get(key: string): any {
      return makeFakeUser();
    }
    set(key: string, value: any): void {}
  }

  return new StorageStub();
};

const makeSut = () => {
  const storage = makeStorage();
  const sut = new Authenticated(storage);

  return { sut, storage };
};

describe("Authenticated", () => {
  test("Should return an authenticated user", async () => {
    const { sut } = makeSut();

    const user = await sut.getAuthenticated();
    const isAuthenticated = await sut.isAuthenticated();

    expect(user).toEqual(makeFakeUser());
    expect(isAuthenticated).toBe(true);
  });

  test("Should not return an authenticated user", async () => {
    const { sut, storage } = makeSut();

    jest.spyOn(storage, "get").mockReturnValue(undefined);

    const user = await sut.getAuthenticated();
    const isAuthenticated = await sut.isAuthenticated();

    expect(user).toBeUndefined();
    expect(isAuthenticated).toBe(false);

    jest.spyOn(storage, "get").mockReset();
  });
});
