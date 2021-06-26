import { AddInput } from "domain/usecases/input/add-input";

import { RemoteAddInput } from "data/usecases/input/add-input/remote-add-input";
import { makeAxiosHttpClient } from "factories/http/axios/axios-http-client-factory";

const makeRemoteAddInput = (): AddInput =>
  new RemoteAddInput(makeAxiosHttpClient());

export { makeRemoteAddInput };
