import { InputModel, InputType } from "domain/models/input/input";
import { ReportHours } from "domain/usecases/report/report-hours";

class InMemoryReportLunchHours implements ReportHours {
  private getTimingDurations(data: InputModel[]): number {
    return data.reduce((acc, { duration }) => acc + duration!, 0);
  }

  private isInputLunch(input: InputModel): boolean {
    return input.type === InputType.LUNCH;
  }

  async report(inputs: InputModel[]): Promise<number> {
    const lunchInputs = inputs.filter(this.isInputLunch);

    return this.getTimingDurations(lunchInputs);
  }
}

export { InMemoryReportLunchHours };
