import { ReportHours } from "domain/usecases/report/report-hours";
import { InMemoryReportLunchHours } from "data/usecases/report/report-lunch-hours/in-memory-report-lunch-hours/in-memory-report-lunch-hours";

const makeInMemoryReportLunchHoursFactory = (): ReportHours =>
  new InMemoryReportLunchHours();

export { makeInMemoryReportLunchHoursFactory };
