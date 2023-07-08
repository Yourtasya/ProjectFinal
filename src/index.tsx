import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.css";

import TeamSingleController from "./controllers/TeamSingleContoller";

const TeamSingleContext = new TeamSingleController();

export const Context = createContext({
  TeamSingleContext,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        TeamSingleContext,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
