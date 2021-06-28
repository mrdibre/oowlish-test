import React, { useState } from "react";
import { Fingerprint } from "@material-ui/icons";
import { Snackbar, Tooltip } from "@material-ui/core";

import { AddInput } from "domain/usecases/input/add-input";
import { InputModel, InputType } from "domain/models/input/input";
import useUserContext from "presentation/context/user/useUserContext";
import { ModalTiming } from "presentation/components/ModalTiming/ModalTiming";
import {
  TimingType,
  ModalTimingInputProps,
} from "presentation/components/ModalTiming/types";

import { FloatingButton } from "./style";

interface TimingProps {
  addInput: AddInput;
  lastInput?: InputModel;
  onAddInput: (input: InputModel) => void;
}

const Timing = ({ addInput, lastInput, onAddInput }: TimingProps) => {
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const { user } = useUserContext();

  const onOpenModal = () => setModalOpened(true);
  const onCloseModal = () => setModalOpened(false);

  const onRegisterTiming = (data: ModalTimingInputProps): Promise<void> => {
    setLoading(true);
    let type = InputType.LUNCH;

    if (data.type === TimingType.TIMING) {
      type =
        lastInput?.type === InputType.ARRIVE
          ? InputType.EXITING
          : InputType.ARRIVE;
    }

    const input = {
      ...data,
      type,
      userId: user!.id,
    };

    return addInput.add(input).then((item) => {
      onAddInput(item);
      setLoading(false);
      setModalOpened(false);
      setShowFeedback(true);
    });
  };

  return (
    <>
      <Snackbar
        color="success"
        open={showFeedback}
        message="Ponto registrado com sucesso"
        onClose={() => setShowFeedback(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Tooltip title="Registrar ponto" placement="left">
        <FloatingButton href="" color="secondary" onClick={onOpenModal}>
          <Fingerprint />
        </FloatingButton>
      </Tooltip>
      <ModalTiming
        loading={loading}
        opened={modalOpened}
        onClose={onCloseModal}
        onConfirm={onRegisterTiming}
      />
    </>
  );
};

export default Timing;
