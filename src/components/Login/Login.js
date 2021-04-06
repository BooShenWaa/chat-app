import React from "react";
import { LoginContainer, LoginInnerContainer } from "./Login.styled";
import icon from "../../img/chat_icon.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={icon} alt="logo" />
        <h1>Sign Into Chat App</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
