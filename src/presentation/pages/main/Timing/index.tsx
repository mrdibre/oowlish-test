import { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { ModalTiming } from "presentation/components/ModalTiming/ModalTiming";

interface TimingProps {
  opened: boolean;
  onClose: () => void;
}

const Timing = ({ opened, onClose }: TimingProps) => {
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const onRegisterTiming = (date: Date, observation: string): Promise<void> =>
    new Promise((resolve) => {
      console.log(date, observation);
      setLoading(true);
      setTimeout(() => {
        onClose();
        resolve(void 0);
        setLoading(false);
        setShowFeedback(true);
      }, 2000);
    });

  return (
    <>
      <Snackbar
        color="success"
        open={showFeedback}
        message="Ponto registrado com sucesso"
        onClose={() => setShowFeedback(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <ModalTiming
        opened={opened}
        onClose={onClose}
        loading={loading}
        onConfirm={onRegisterTiming}
      />
    </>
  );
};

export default Timing;
