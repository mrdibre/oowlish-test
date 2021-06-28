import { useMemo } from "react";

const useMsToHumanDate = (duration: number) => {
  const value = useMemo(() => {
    const hours = ((duration / (1000 * 60 * 60)) % 24).toFixed(0);
    const minutes = ((duration / (1000 * 60)) % 60).toFixed(0);

    return `${hours.padStart(2, "0")}h ${minutes.padStart(2, "0")}m`;
  }, [duration]);

  return value;
};

export { useMsToHumanDate };
