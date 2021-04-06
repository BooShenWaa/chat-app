import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--main-color);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: var(--lighter-color);
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px #8eaba9 solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;

    ::placeholder {
      color: white;
    }
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > Button {
    margin-left: auto;
    margin-right: 20px;
    background-color: var(--lighter-color);
    color: white;
  }
`;
