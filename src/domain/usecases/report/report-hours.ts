import { InputModel } from "domain/models/input/input";

export interface ReportHours {
  report(inputs: InputModel[]): Promise<number>;
}
