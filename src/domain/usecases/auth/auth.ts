import { UserModel } from "domain/models/user/user";

export interface Authentication {
  login(name: string, email: string): Promise<UserModel>;
}

export interface Auth {
  isAuthenticated(): Promise<boolean>;
  getAuthenticated(): Promise<UserModel | null>;
}
