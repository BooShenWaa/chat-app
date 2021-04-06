import React from "react";
//
// import { Avatar } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "./Header.styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Button } from "@material-ui/core";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search..." />
      </HeaderSearch>

      <HeaderRight>
        <Button onClick={() => auth.signOut()}>LogOut</Button>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
