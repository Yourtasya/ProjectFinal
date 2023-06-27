import React from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "../routes";
import { HOME_ROUTE } from "../links/consts";
import { NOT_FOUND_ROUTE } from "../links/ExceptionRoute/consts";

//Маршрутизатор
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={HOME_ROUTE} />} />
      <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} />} />

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
}

export default observer(AppRouter);
