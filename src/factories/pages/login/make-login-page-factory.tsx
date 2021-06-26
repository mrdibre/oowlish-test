import { LoginPage } from "presentation/pages/login/Login";
import { makeLoginFactory } from "factories/usecases/authentication/login/login-factory";

const makeLoginPageFactory = () => {
  const loginFactory = makeLoginFactory();

  return <LoginPage authentication={loginFactory} />;
};

export { makeLoginPageFactory };
