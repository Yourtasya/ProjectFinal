import React from "react";
import { publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";

//Маршрутизатор
function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
}

export default observer(AppRouter);
