import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
// import { Context } from "./components/UserContext";
import { AuthProvider } from "./components/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
