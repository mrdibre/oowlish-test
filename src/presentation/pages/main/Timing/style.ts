import styled from "styled-components";
import { Fab } from "@material-ui/core";

const FloatingButton = styled(Fab)`
  position: fixed;
  right: ${({ theme }) => theme.spacing(4)}px;
  bottom: ${({ theme }) => theme.spacing(4)}px;
`;

export { FloatingButton };
