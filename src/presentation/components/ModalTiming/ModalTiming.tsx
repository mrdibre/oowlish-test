import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { Container } from "./style";
import TimePicker from "../TimePicker";

interface ModalTimingProps {
  opened: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: (date: Date, observation: string) => Promise<void>;
}

const ModalTiming = ({
  opened,
  loading,
  onClose,
  onConfirm,
}: ModalTimingProps) => {
  const [observation, setObservation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = () => {
    onConfirm(selectedDate, observation).then(() => {
      setObservation("");
      setSelectedDate(new Date());
    });
  };

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
