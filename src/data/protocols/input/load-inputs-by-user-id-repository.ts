import { InputModel } from "domain/models/input/input";

export interface LoadInputsByUserIdRepository {
  load(userId: string): Promise<InputModel[]>;
}
