import React from "react";
import { TimePicker as MuiTimePicker } from "@material-ui/pickers";

interface TimePickerProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}

const TimePicker = ({ onChange, value, label }: TimePickerProps) => {
  const handleChange = (date: string) => onChange(new Date(date));

  return (
    <MuiTimePicker
      fullWidth
      ampm={false}
      label={label}
      variant="inline"
      inputVariant="outlined"
      value={value}
      // @ts-ignore
      onChange={handleChange}
    />
  );
};

export default TimePicker;
