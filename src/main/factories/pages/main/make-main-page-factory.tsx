import { MainPage } from "presentation/pages/main/Main";
import { makeLogoutFactory } from "main/factories/usecases/authentication/logout/logout-factory";
import { makeAuthenticatedFactory } from "main/factories/usecases/authentication/authenticated/authenticated";
import { makeFirebaseAddInputRepositoryFactory } from "main/factories/repositories/input/firebase-add-input-repository-factory";
import { makeInMemoryReportWorkedHoursFactory } from "main/factories/usecases/report/report-worked-hours/make-in-memory-report-worked-hours-factory";
import { makeFirebaseLoadInputsByUserIdRepositoryFactory } from "main/factories/repositories/input/firebase-load-inputs-by-user-id-repository-factory";

const makeMainPageFactory = () => {
  const signOutFactory = makeLogoutFactory();
  const authFactory = makeAuthenticatedFactory();
  const reportFactory = makeInMemoryReportWorkedHoursFactory();
  const addInputFactory = makeFirebaseAddInputRepositoryFactory();
  const loadInputFactory = makeFirebaseLoadInputsByUserIdRepositoryFactory();

  return (
    <MainPage
      auth={authFactory}
      signOut={signOutFactory}
      addInput={addInputFactory}
      reportWorkedHours={reportFactory}
      loadInputsByUserId={loadInputFactory}
    />
  );
};

export { makeMainPageFactory };
