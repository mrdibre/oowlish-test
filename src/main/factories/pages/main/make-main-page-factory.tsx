import { MainPage } from "presentation/pages/main/Main";
import { makeLogoutFactory } from "main/factories/usecases/authentication/logout/logout-factory";
import { makeAuthenticatedFactory } from "main/factories/usecases/authentication/authenticated/authenticated";
import { makeFirebaseAddInputRepositoryFactory } from "main/factories/repositories/input/firebase-add-input-repository-factory";
import { makeFirebaseLoadInputsByUserIdRepositoryFactory } from "main/factories/repositories/input/firebase-load-inputs-by-user-id-repository-factory";

const makeMainPageFactory = () => {
  const signOutFactory = makeLogoutFactory();
  const authFactory = makeAuthenticatedFactory();
  const addInputFactory = makeFirebaseAddInputRepositoryFactory();
  const loadInputFactory = makeFirebaseLoadInputsByUserIdRepositoryFactory();

  return (
    <MainPage
      auth={authFactory}
      signOut={signOutFactory}
      addInput={addInputFactory}
      loadInputsByUserId={loadInputFactory}
    />
  );
};

export { makeMainPageFactory };
