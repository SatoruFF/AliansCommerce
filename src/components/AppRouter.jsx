import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { WELCOME__ROUTE } from "../utils/consts";
import { routes } from "../utils/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, page }) => {
        <Route key={path} path={path} element={<page />}></Route>;
      })}
      {/* <Route path="/*" element={<Navigate replace to={WELCOME__ROUTE} />} /> */}
    </Routes>
  );
};

export default AppRouter;
