import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { InputModel } from "domain/models/input/input";
import { Auth, SignOut } from "domain/usecases/auth/auth";
import { AddInput } from "domain/usecases/input/add-input";
import { Layout } from "presentation/components/Layout/Layout";
import { ReportHours } from "domain/usecases/report/report-hours";
import useUserContext from "presentation/context/user/useUserContext";
import withUserContext from "presentation/context/user/withUserContext";
import { LoadInputsByUserId } from "domain/usecases/input/load-inputs-by-user-id";

import Timing from "./Timing";
import InputList from "./InputList";
import { WorkedHours } from "./WorkedHours";
import { LunchHours } from "./LunchHours";

interface MainProps {
  auth: Auth;
  signOut: SignOut;
  addInput: AddInput;
  reportLunchHours: ReportHours;
  reportWorkedHours: ReportHours;
  loadInputsByUserId: LoadInputsByUserId;
}

const Main = ({
  auth,
  signOut,
  addInput,
  reportLunchHours,
  reportWorkedHours,
  loadInputsByUserId,
}: MainProps) => {
  const [lastInput, setLastInput] = useState<InputModel>();
  const [loadingInputs, setLoadingInputs] = useState(false);
  const [inputsByUser, setInputsByUser] = useState<InputModel[]>([]);

  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const onLogout = async () => {
    await signOut.logout();
    push("/login");
  };

  const onAddInput = (input: InputModel) => {
    setLastInput(input);
    setInputsByUser((init) => [...init, input]);
  };

  const fetchInputsByUser = useCallback(
    (id: string) => {
      setLoadingInputs(true);
      loadInputsByUserId.load(id).then((inputs) => {
        setInputsByUser(inputs);
        setLoadingInputs(false);

        setLastInput(inputs[inputs.length - 1]);
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
        lastInput={lastInput}
        onAddInput={onAddInput}
      />

      <InputList inputs={inputsByUser} loading={loadingInputs} />

      <WorkedHours
        inputs={inputsByUser}
        reportWorkedHours={reportWorkedHours}
      />
      <LunchHours inputs={inputsByUser} reportLunchHours={reportLunchHours} />
    </Layout>
  );
};

const MainPage = withUserContext<MainProps>(Main);

export { MainPage };
