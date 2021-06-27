export enum InputType {
  ARRIVE = "ARRIVE",
  EXITING = "EXITING",
}

export interface InputModel {
  id: string;
  date: number;
  userId: string;
  observation?: string;
  type: keyof typeof InputType;
}
