import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.css";

import TeamSingleController from "./controllers/TeamSingleContoller";
import { AuthController } from "./controllers/AuthController";

const TeamSingleContext = new TeamSingleController();
const AuthContext = new AuthController();

export const Context = createContext({
  TeamSingleContext,
  AuthContext,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        TeamSingleContext,
        AuthContext,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
