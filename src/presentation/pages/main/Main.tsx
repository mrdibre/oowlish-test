import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Auth, SignOut } from "domain/usecases/auth/auth";
import { Layout } from "presentation/components/Layout/Layout";
import useUserContext from "presentation/context/user/useUserContext";
import { AddButton } from "presentation/components/AddButton/AddButton";
import withUserContext from "presentation/context/user/withUserContext";

import Timing from "./Timing";

interface MainProps {
  auth: Auth;
  signOut: SignOut;
}

const Main = ({ auth, signOut }: MainProps) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const onLogout = async () => {
    await signOut.logout();
    push("/login");
  };

  const onOpenTiming = () => setModalIsOpened(true);
  const onCloseTiming = () => setModalIsOpened(false);

  useEffect(() => {
    (async () => {
      const authenticated = await auth.getAuthenticated();

      if (authenticated) {
        return !user && setUser(authenticated);
      }

      push("/login");
    })();
  }, [auth, push, setUser, user]);

  return (
    <Layout username={user?.name ?? ""} onLogout={onLogout}>
      <Timing opened={modalIsOpened} onClose={onCloseTiming} />
      <AddButton onAskBreak={() => {}} onAskTiming={onOpenTiming} />
    </Layout>
  );
};

const MainPage = withUserContext<MainProps>(Main);

export { MainPage };
