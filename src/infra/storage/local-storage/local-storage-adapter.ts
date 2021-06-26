import { Storage } from "data/protocols/storage/storage";

class LocalStorageAdapter implements Storage {
  public clear() {
    localStorage.clear();
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }

  public get(key: string): void {
    localStorage.getItem(key);
  }

  public set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}

export { LocalStorageAdapter };
