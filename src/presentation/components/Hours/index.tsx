import { Grid, Typography } from "@material-ui/core";

import { Card } from "presentation/components/Card/Card";
import { useMsToHumanDate } from "presentation/hooks/useMsToHumanDate";

interface HoursProps {
  ms: number;
  label: string;
}

const Hours = ({ label, ms }: HoursProps) => {
  const value = useMsToHumanDate(ms);

  return (
    <Grid item xs={4}>
      <Card title={label}>
        <Typography variant="h5">{value}</Typography>
      </Card>
    </Grid>
  );
};

export { Hours };
