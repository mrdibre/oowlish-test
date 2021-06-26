import { UserModel } from "domain/models/user/user";

export interface Authentication {
  login(name: string, email: string): Promise<UserModel>;
}

export interface Authenticated {
  getAuthenticated(): Promise<UserModel>;
}
