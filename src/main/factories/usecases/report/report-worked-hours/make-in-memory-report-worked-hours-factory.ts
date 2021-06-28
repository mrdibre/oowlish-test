import { ReportWorkedHours } from "domain/usecases/report/report-worked-hours";
import { InMemoryReportWorkedHours } from "data/usecases/report/report-worked-hours/in-memory-report-worked-hours/in-memory-report-worked-hours";

const makeInMemoryReportWorkedHoursFactory = (): ReportWorkedHours =>
  new InMemoryReportWorkedHours();

export { makeInMemoryReportWorkedHoursFactory };
