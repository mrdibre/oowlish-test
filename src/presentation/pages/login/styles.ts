import styled from "styled-components";
import { Avatar as AvatarMui, Button as ButtonMui } from "@material-ui/core";

const flexConfig = `
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.main`
  width: 100%;
  height: 100%;
  ${flexConfig};
  padding-top: 10vh;

  > div {
    ${flexConfig};
    width: 400px;
  }
`;

const Avatar = styled(AvatarMui)`
  margin: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.palette.secondary.main};
`;

const Button = styled(ButtonMui)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`;

export { Avatar, Button, Container };
