import { SignOut } from "domain/usecases/auth/auth";
import { Storage } from "data/protocols/storage/storage";

class Logout implements SignOut {
  constructor(private readonly storage: Storage) {}

  async logout(): Promise<void> {
    this.storage.delete("user");
  }
}

export { Logout };
