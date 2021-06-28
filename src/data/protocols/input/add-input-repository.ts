import { InputModel } from "domain/models/input/input";

export interface AddInputRepository {
  add(input: Omit<InputModel, "id">): Promise<InputModel>;
}
