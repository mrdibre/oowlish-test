import { UserModel } from "domain/models/user/user";
import { Authentication } from "domain/usecases/auth/auth";

import { v4 as uuid } from "uuid";

class Login implements Authentication {
  /*
    Simulates an user authentication on back-end
    For real scenario this class will receive the HttpClient as a
    dependency on constructor, call the auth endpoint and save the JWT on Storage
   */
  async login(name: string, email: string): Promise<UserModel> {
    return {
      id: uuid(),
      name,
      email,
    };
  }
}

export { Login };
