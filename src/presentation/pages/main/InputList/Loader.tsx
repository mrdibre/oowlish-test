import {
  Avatar,
  List,
  ListItem,
  Typography,
  ListSubheader,
  ListItemAvatar,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const Loader = () => (
  <List
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Pontos Registrados
      </ListSubheader>
    }
  >
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            </Avatar>
          </ListItemAvatar>
          <Typography component="div" variant="h3">
            <Skeleton width="200px" />
          </Typography>
        </ListItem>
      ))}
  </List>
);

export { Loader };
