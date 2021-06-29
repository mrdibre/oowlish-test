import { useEffect, useState } from "react";

import { Hours } from "presentation/components/Hours";
import { InputModel } from "domain/models/input/input";
import { ReportHours } from "domain/usecases/report/report-hours";

interface LunchHoursProps {
  inputs: InputModel[];
  reportLunchHours: ReportHours;
}

const LunchHours = ({ inputs, reportLunchHours }: LunchHoursProps) => {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (inputs.length) {
      reportLunchHours.report(inputs).then((hours) => {
        setHours(hours);
      });
    }
  }, [inputs, reportLunchHours]);

  return <Hours ms={hours} label="Horas em pausa" />;
};

export { LunchHours };
