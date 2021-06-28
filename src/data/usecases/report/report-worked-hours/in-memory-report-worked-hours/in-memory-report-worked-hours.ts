import { InputModel, InputType } from "domain/models/input/input";
import { ReportWorkedHours } from "domain/usecases/report/report-worked-hours";

class InMemoryReportWorkedHours implements ReportWorkedHours {
  private getTimingDurations(data: InputModel[]): number[] {
    return data.map((input, index, inputs) => {
      if (input.type === InputType.ARRIVE) {
        const initialDate = input.date;
        const finalDate = inputs[index + 1]?.date ?? Date.now();

        return Math.abs(initialDate - finalDate);
      }

      return 0;
    });
  }

  private calculateTiming(durations: number[]): number {
    return durations.reduce((acc, curr) => acc + curr, 0);
  }

  async reportHours(inputs: InputModel[]): Promise<number> {
    const durations = this.getTimingDurations(inputs);

    return this.calculateTiming(durations);
  }
}

export { InMemoryReportWorkedHours };
