import { MainPage } from "presentation/pages/main/Main";
import { makeLogoutFactory } from "main/factories/usecases/authentication/logout/logout-factory";
import { makeAuthenticatedFactory } from "main/factories/usecases/authentication/authenticated/authenticated";

const makeMainPageFactory = () => {
  const authFactory = makeAuthenticatedFactory();
  const signOutFactory = makeLogoutFactory();

  return <MainPage signOut={signOutFactory} auth={authFactory} />;
};

export { makeMainPageFactory };
