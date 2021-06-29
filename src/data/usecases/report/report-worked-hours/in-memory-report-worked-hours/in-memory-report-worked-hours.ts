import { InputModel, InputType } from "domain/models/input/input";
import { ReportHours } from "domain/usecases/report/report-hours";

class InMemoryReportWorkedHours implements ReportHours {
  private getTimingDurations(data: InputModel[]): number[] {
    return data.map((input, index, inputs) => {
      if (input.type !== InputType.ARRIVE) {
        const initialDate = input.date;
        const finalDate = inputs[index - 1]?.date ?? Date.now();

        return Math.abs(initialDate - finalDate);
      }

      return 0;
    });
  }

  private calculateTiming(durations: number[]): number {
    return durations.reduce((acc, curr) => acc + curr, 0);
  }

  async report(inputs: InputModel[]): Promise<number> {
    const durations = this.getTimingDurations(inputs);

    return this.calculateTiming(durations);
  }
}

export { InMemoryReportWorkedHours };
