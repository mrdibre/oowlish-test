import { InputModel } from "domain/models/input/input";

export interface AddInput {
  add(data: Omit<InputModel, "id">): Promise<InputModel>;
}
