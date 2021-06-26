import { Storage } from "data/protocols/storage/storage";

class LocalStorageAdapter implements Storage {
  public clear() {
    localStorage.clear();
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }

  public get(key: string): any {
    const value = localStorage.getItem(key);

    try {
      return JSON.parse(value!);
    } catch (e) {
      return value;
    }
  }

  public set(key: string, val: any): void {
    const value = typeof val === "object" ? JSON.stringify(val) : val;

    localStorage.setItem(key, value);
  }
}

export { LocalStorageAdapter };
