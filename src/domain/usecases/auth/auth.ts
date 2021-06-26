import { UserModel } from "domain/models/user/user";

export interface SignIn {
  login(name: string, email: string): Promise<UserModel>;
}

export interface SignOut {
  logout(): Promise<void>;
}

export interface Auth {
  isAuthenticated(): Promise<boolean>;
  getAuthenticated(): Promise<UserModel | null>;
}
