import { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import { InputModel } from "domain/models/input/input";
import { Card } from "presentation/components/Card/Card";
import { useMsToHumanDate } from "presentation/hooks/useMsToHumanDate";
import { ReportWorkedHours } from "domain/usecases/report/report-worked-hours";

interface WorkedHoursProps {
  inputs: InputModel[];
  reportWorkedHours: ReportWorkedHours;
}

const WorkedHours = ({ inputs, reportWorkedHours }: WorkedHoursProps) => {
  const [hours, setHours] = useState(0);

  const value = useMsToHumanDate(hours);

  useEffect(() => {
    if (inputs.length) {
      reportWorkedHours.reportHours(inputs).then((hours) => {
        setHours(hours);
      });
    }
  }, [inputs, reportWorkedHours]);

  return (
    <Grid item xs={4}>
      <Card title="Horas Trabalhadas">
        <Typography variant="h5">{value}</Typography>
      </Card>
    </Grid>
  );
};

export { WorkedHours };
