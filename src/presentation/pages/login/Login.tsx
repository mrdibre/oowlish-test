import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { Auth, SignIn } from "domain/usecases/auth/auth";
import useUserContext from "presentation/context/user/useUserContext";
import { withUserContext } from "presentation/context/user/withUserContext";

import { Container, Avatar, Button } from "./styles";

interface LoginProps {
  auth: Auth;
  signIn: SignIn;
}

const Login = ({ auth, signIn }: LoginProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useUserContext();
  const { push } = useHistory();

  const onChange =
    (dispatch: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(event.target.value);
    };

  const onLogin = async () => {
    const user = await signIn.login(name, email);
    setUser(user);
    push("/");
  };

  useEffect(() => {
    (async () => {
      const authenticated = await auth.getAuthenticated();

      if (authenticated) {
        setUser(authenticated);
        push("/");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [push]);

  return (
    <Container>
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          required
          autoFocus
          fullWidth
          id="name"
          name="name"
          type="name"
          label="Nome"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={onChange(setName)}
        />
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          variant="outlined"
          autoComplete="email"
          value={email}
          onChange={onChange(setEmail)}
        />
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          onClick={onLogin}
          disabled={!name || !email}
        >
          Acessar
        </Button>
      </div>
    </Container>
  );
};

const LoginPage = withUserContext<LoginProps>(Login);

export { LoginPage };
