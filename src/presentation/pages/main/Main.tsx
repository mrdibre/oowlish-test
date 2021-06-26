import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { Card } from "../../components/Card/Card";
import { Layout } from "../../components/Layout/Layout";
import { Auth, SignOut } from "domain/usecases/auth/auth";
import useUserContext from "presentation/context/user/useUserContext";
import withUserContext from "presentation/context/user/withUserContext";

interface MainProps {
  auth: Auth;
  signOut: SignOut;
}

const Main = ({ auth, signOut }: MainProps) => {
  const { user, setUser } = useUserContext();
  const { push } = useHistory();

  const onLogout = async () => {
    await signOut.logout();
    push("/login");
  };

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
    <Layout onLogout={onLogout}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Worked Hours">
            <p>Horas Trabalhadas</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Arrivals">
            <p>Horas Trabalhadas</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Exitings">
            <p>Horas Trabalhadas</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="Lunch Breaks">
            <p>Horas Trabalhadas</p>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

const MainPage = withUserContext<MainProps>(Main);

export { MainPage };
