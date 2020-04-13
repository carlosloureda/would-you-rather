import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "antd/dist/antd.css";
import App from "./components/App";

ReactDOM.render(
  //TODO: fix error at antdesign with StrictMode
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
