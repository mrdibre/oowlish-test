import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectProps,
} from "@material-ui/core";

import { Container } from "./style";
import TimePicker from "../TimePicker";
import { ModalTimingProps, TimingType } from "./types";

const ModalTiming = ({
  opened,
  loading,
  onClose,
  onConfirm,
}: ModalTimingProps) => {
  const [type, setType] = useState(TimingType.TIMING);
  const [observation, setObservation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = () => {
    const isLunch = type === TimingType.LUNCH;

    const payload = {
      type,
      observation,
      date: +selectedDate,
      ...(isLunch && {
        duration: 3600000,
      }),
    };

    onConfirm(payload).then(() => {
      setObservation("");
      setType(TimingType.TIMING);
      setSelectedDate(new Date());
    });
  };

  const onChangeType: SelectProps["onChange"] = (event) =>
    setType(event.target.value as TimingType);

  return (
    <Dialog open={opened} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Registrar ponto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, insira abaixo o horário de entrada/saída para que possamos
          calcular corretamente o seu banco de horas.
        </DialogContentText>
        <Container>
          <TimePicker
            label="Horário"
            value={selectedDate}
            onChange={setSelectedDate}
          />
        </Container>

        <FormControl fullWidth variant="outlined">
          <InputLabel>Tipo</InputLabel>
          <Select value={type} label="Tipo" onChange={onChangeType}>
            <MenuItem value={TimingType.TIMING}>Ponto</MenuItem>
            <MenuItem value={TimingType.LUNCH}>Pausa Almoço</MenuItem>
          </Select>
        </FormControl>

        <Container>
          <TextField
            fullWidth
            type="text"
            id="observation"
            variant="outlined"
            label="Observação"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
          />
        </Container>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={onClose} color="primary">
          Fechar
        </Button>
        <Button disabled={loading} onClick={handleConfirm} color="primary">
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ModalTiming };
