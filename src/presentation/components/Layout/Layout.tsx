import { ReactNode } from "react";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
  children: ReactNode;
  onLogout: () => void;
}

const Layout = ({ children, onLogout }: LayoutProps) => {
  const classes = useStyles();

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
          <div>{children}</div>
        </Container>
      </main>
    </div>
  );
};

export { Layout };
