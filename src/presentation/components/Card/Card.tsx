import { ReactNode } from "react";
import CardMui from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => (
  <CardMui variant="outlined">
    <CardContent>
      <Typography variant="body2">{title}</Typography>
      {children}
    </CardContent>
  </CardMui>
);

export { Card };
