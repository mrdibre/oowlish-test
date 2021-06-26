import "jest-localstorage-mock";

import { LocalStorageAdapter } from "./local-storage-adapter";

const makeSut = () => new LocalStorageAdapter();

describe("LocalStorageAdapter", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Should call localStorage.setItem with correct values", async () => {
    const sut = makeSut();

    sut.set("any_key", "any_value");

    expect(localStorage.setItem).toHaveBeenCalledWith("any_key", "any_value");
  });

  test("Should call localStorage.removeItem with correct values", async () => {
    const sut = makeSut();

    sut.delete("any_key");

    expect(localStorage.removeItem).toHaveBeenCalledWith("any_key");
  });

  test("Should call localStorage.getItem with correct value", async () => {
    const sut = makeSut();

    const getItemSpy = jest
      .spyOn(localStorage, "getItem")
      .mockReturnValueOnce("any_value");

    sut.get("any_key");

    expect(getItemSpy).toHaveBeenCalledWith("any_key");
  });
});
