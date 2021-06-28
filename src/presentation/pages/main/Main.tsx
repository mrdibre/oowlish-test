import { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { InputModel } from "domain/models/input/input";
import { Auth, SignOut } from "domain/usecases/auth/auth";
import { AddInput } from "domain/usecases/input/add-input";
import { Layout } from "presentation/components/Layout/Layout";
import useUserContext from "presentation/context/user/useUserContext";
import withUserContext from "presentation/context/user/withUserContext";
import { LoadInputsByUserId } from "domain/usecases/input/load-inputs-by-user-id";

import Timing from "./Timing";
import InputList from "./InputList";

interface MainProps {
  auth: Auth;
  signOut: SignOut;
  addInput: AddInput;
  loadInputsByUserId: LoadInputsByUserId;
}

const Main = ({ auth, addInput, signOut, loadInputsByUserId }: MainProps) => {
  const [loadingInputs, setLoadingInputs] = useState(false);
  const [inputsByUser, setInputsByUser] = useState<InputModel[]>([]);
  const lastInput = useRef<InputModel>();

  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const onLogout = async () => {
    await signOut.logout();
    push("/login");
  };

  const onAddInput = (input: InputModel) => {
    lastInput.current = input;
    setInputsByUser((init) => [...init, input]);
  };

  const fetchInputsByUser = useCallback(
    (id: string) => {
      setLoadingInputs(true);
      loadInputsByUserId.load(id).then((inputs) => {
        setInputsByUser(inputs);
        setLoadingInputs(false);

        lastInput.current = inputs[inputs.length - 1];
      });
    },
    [loadInputsByUserId]
  );

  useEffect(() => {
    if (!user) {
      auth.getAuthenticated().then((authenticated) => {
        if (authenticated) {
          fetchInputsByUser(authenticated.id);
          return setUser(authenticated);
        }

        push("/login");
      });
    }
  }, [auth, fetchInputsByUser, push, setUser, user]);

  return (
    <Layout user={user} onLogout={onLogout}>
      <Timing
        addInput={addInput}
        onAddInput={onAddInput}
        lastInput={lastInput.current}
      />

      <InputList inputs={inputsByUser} loading={loadingInputs} />
    </Layout>
  );
};

const MainPage = withUserContext<MainProps>(Main);

export { MainPage };
