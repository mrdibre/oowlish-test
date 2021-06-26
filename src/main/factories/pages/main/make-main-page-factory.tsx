import { SignOut } from "domain/usecases/auth/auth";
import { MainPage } from "presentation/pages/main/Main";
import { makeAuthenticatedFactory } from "main/factories/usecases/authentication/authenticated/authenticated";

const makeMainPageFactory = () => {
  const authFactory = makeAuthenticatedFactory();

  class a implements SignOut {
    logout(): Promise<void> {
      return Promise.resolve(undefined);
    }
  }

  return <MainPage signOut={new a()} auth={authFactory} />;
};

export { makeMainPageFactory };
