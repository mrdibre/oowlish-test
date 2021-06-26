import { Auth } from "domain/usecases/auth/auth";
import { UserModel } from "domain/models/user/user";
import { Storage } from "../../../protocols/storage/storage";

class Authenticated implements Auth {
  constructor(private readonly storage: Storage) {}

  async getAuthenticated(): Promise<UserModel | null> {
    return this.storage.get("user");
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await this.getAuthenticated();

    return Boolean(user);
  }
}

export { Authenticated };
