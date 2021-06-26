import { Authentication } from "domain/usecases/auth/auth";

import { Login } from "data/usecases/authentication/login/login";

const makeLoginFactory = (): Authentication => new Login();

export { makeLoginFactory };
