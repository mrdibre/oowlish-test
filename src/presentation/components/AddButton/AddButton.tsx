import React, { useState } from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { Fastfood, Fingerprint, Timer } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: "translateZ(0px)",
      flexGrow: 1,
    },
    exampleWrapper: {
      position: "relative",
      marginTop: theme.spacing(3),
      height: 380,
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    speedDial: {
      position: "absolute",
      "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  })
);

interface AddButtonProps {
  onAskBreak: () => void;
  onAskTiming: () => void;
}

const AddButton = ({ onAskBreak, onAskTiming }: AddButtonProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  const onOpen = () => setOpen(true);

  return (
    <SpeedDial
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      icon={<Fingerprint />}
      direction="up"
      ariaLabel="Add Button"
      className={classes.speedDial}
    >
      <SpeedDialAction
        icon={<Fastfood />}
        title="Registrar pausa"
        onClick={onAskBreak}
      />
      <SpeedDialAction
        icon={<Timer />}
        onClick={onAskTiming}
        title="Registrar Ponto"
      />
    </SpeedDial>
  );
};

export { AddButton };
