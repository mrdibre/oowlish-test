import { InputModel } from "domain/models/input/input";

export interface ReportWorkedHours {
  reportHours(inputs: InputModel[]): Promise<number>;
}
