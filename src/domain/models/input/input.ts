export enum InputType {
  ARRIVE = "ARRIVE",
  EXITING = "EXITING",
  LUNCH = "LUNCH",
}

export interface InputModel {
  id: string;
  date: number;
  userId: string;
  duration?: number;
  observation?: string;
  type: keyof typeof InputType;
}
