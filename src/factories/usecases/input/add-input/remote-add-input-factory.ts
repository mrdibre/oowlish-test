import { AddInput } from "@oowlish/domain/usecases/input/add-input";
import { RemoteAddInput } from "@oowlish/data/usecases/input/add-input/remote-add-input";
import { makeAxiosHttpClient } from "@oowlish/factories/http/axios/axios-http-client-factory";

const makeRemoteAddInput = (): AddInput =>
  new RemoteAddInput(makeAxiosHttpClient());

export { makeRemoteAddInput };
