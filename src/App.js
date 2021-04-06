import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBody, AppLoading, AppLoadingContents } from "./App.styled";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Chat from "./components/Chat/Chat";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import Spinner from "react-spinkit";
import icon from "./img/icon.png";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={icon} alt="logo" />
          <Spinner
            name="chasing-dots"
            fadeIn="none"
            color="var(--main-color)"
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
