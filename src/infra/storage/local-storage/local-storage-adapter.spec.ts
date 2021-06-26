import { LocalStorageAdapter } from "./local-storage-adapter";

describe("LocalStorageAdapter", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  const sut = new LocalStorageAdapter();

  test("", () => {
    expect(sut.get("valid_key")).toBeNull();

    sut.set("valid_key", "valid_value");
    expect(sut.get("valid_key")).toBe("valid_value");

    sut.set("valid_json", { valid: "value" });
    expect(sut.get("valid_json")).toEqual({ valid: "value" });

    sut.delete("valid_key");
    expect(sut.get("valid_key")).toBeNull();
  });
});
