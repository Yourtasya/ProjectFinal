import React from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "../routes";
import { HOME_ROUTE } from "../links/consts";

//Маршрутизатор
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={HOME_ROUTE} />} />

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
}

export default observer(AppRouter);
