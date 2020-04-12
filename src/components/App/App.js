import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Nav from "../Nav";
import Login from "../Login";
import Dashboard from "../Dashboard";
import NewQuestion from "../NewQuestion";
import Leaderboard from "../Leaderboard";
import Question from "../Question";
import NotFound from "../NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add" component={NewQuestion} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/questions/:id" component={Question} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
