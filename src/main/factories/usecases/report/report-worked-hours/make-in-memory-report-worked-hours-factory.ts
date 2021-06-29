import { ReportHours } from "domain/usecases/report/report-hours";
import { InMemoryReportWorkedHours } from "data/usecases/report/report-worked-hours/in-memory-report-worked-hours/in-memory-report-worked-hours";

const makeInMemoryReportWorkedHoursFactory = (): ReportHours =>
  new InMemoryReportWorkedHours();

export { makeInMemoryReportWorkedHoursFactory };
