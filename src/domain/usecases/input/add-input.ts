import { InputModel } from "@oowlish/domain/models/input/input";

export interface AddInput {
  add(data: Omit<InputModel, "id">): Promise<InputModel>;
}
