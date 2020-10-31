import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import User from "./components/users/user";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Notfound from "./components/pages/notfound";

import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/user/:login" component={User} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
