import { InputModel } from "domain/models/input/input";

export interface LoadInputsByUserId {
  load(userId: string): Promise<InputModel[]>;
}
