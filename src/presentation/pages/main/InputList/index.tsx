import {
  Grid,
  List,
  Paper,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
} from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import FastFoodIcon from "@material-ui/icons/Fastfood";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

import { InputModel, InputType } from "domain/models/input/input";

import { Loader } from "./Loader";
import { formatDate } from "presentation/helpers/date";

interface InputProps {
  loading: boolean;
  inputs: InputModel[];
}

const icons = {
  [InputType.LUNCH]: <FastFoodIcon />,
  [InputType.EXITING]: <CallMadeIcon />,
  [InputType.ARRIVE]: <CallReceivedIcon />,
};

const InputList = ({ loading, inputs }: InputProps) => (
  <Grid item xs={4}>
    <Paper variant="outlined">
      {loading ? (
        <Loader />
      ) : (
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pontos Registrados
            </ListSubheader>
          }
        >
          {inputs.length ? (
            inputs.map((input) => (
              <ListItem key={input.id}>
                <ListItemAvatar>
                  <Avatar>{icons[input.type]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={formatDate(input.date)}
                  secondary={input.observation}
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="Nenhum registro encontrado." />
            </ListItem>
          )}
        </List>
      )}
    </Paper>
  </Grid>
);

export default InputList;
