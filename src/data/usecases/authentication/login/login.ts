import { v4 as uuid } from "uuid";

import { UserModel } from "domain/models/user/user";
import { SignIn } from "domain/usecases/auth/auth";

// eslint-disable-next-line
import { Storage } from "../../../protocols/storage/storage";

class Login implements SignIn {
  constructor(private readonly storage: Storage) {}

  /*
    Simulates an user authentication on back-end
    For real scenario this class will receive the HttpClient as a
    dependency on constructor, call the auth endpoint and save the JWT on storage
   */
  async login(name: string, email: string): Promise<UserModel> {
    const user = {
      id: uuid(),
      name,
      email,
    };

    this.storage.set("user", user);

    return user;
  }
}

export { Login };
