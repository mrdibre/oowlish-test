import { LoginPage } from "presentation/pages/login/Login";
import { makeLoginFactory } from "main/factories/usecases/authentication/login/login-factory";
import { makeAuthenticatedFactory } from "main/factories/usecases/authentication/authenticated/authenticated";

const makeLoginPageFactory = () => {
  const loginFactory = makeLoginFactory();
  const authFactory = makeAuthenticatedFactory();

  return <LoginPage auth={authFactory} signIn={loginFactory} />;
};

export { makeLoginPageFactory };
