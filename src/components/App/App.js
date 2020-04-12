import React from "react";
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
    <div>
      <Nav />
      <Login />
      <Dashboard />
      <NewQuestion />
      <Leaderboard />
      <Question />
      <NotFound />
    </div>
  );
}

export default App;
