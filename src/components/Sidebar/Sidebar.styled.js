import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--main-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(--lighter-color);
  max-width: 260px;
  margin-top: 60px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--lighter-color);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--main-color);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: lightgreen;
  }
`;

export const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0;
  border-top: 1px solid var(--lighter-color);
  color: var(--lighter-color);
`;
