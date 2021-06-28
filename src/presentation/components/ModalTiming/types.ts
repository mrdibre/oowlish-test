export enum TimingType {
  LUNCH = "LUNCH",
  TIMING = "TIMING",
}

export interface ModalTimingInputProps {
  date: number;
  type: TimingType;
  duration?: number;
  observation: string;
}

export interface ModalTimingProps {
  opened: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: (input: ModalTimingInputProps) => Promise<void>;
}
