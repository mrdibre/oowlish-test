import { ReactNode, useEffect, useState } from "react";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

interface LayoutProps {
  username: string;
  children: ReactNode;
  onLogout: () => void;
}

const Layout = ({ username, children, onLogout }: LayoutProps) => {
  const [timer, setTimer] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const syncTimer = () => {
      const date = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });

      setTimer(date.format(new Date()));
    };

    syncTimer();

    const id = setInterval(syncTimer, 60000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            noWrap
            variant="h6"
            component="h1"
            color="inherit"
            className={classes.title}
          >
            Dashboard
          </Typography>
          <Typography noWrap variant="body2" color="inherit">
            {username}
          </Typography>
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={onLogout}>
              <Badge color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" variant="h5">
                {timer}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export { Layout };
