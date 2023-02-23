import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import Welcome from "../pages/welcome";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      <Route key={WELCOME__ROUTE} path={WELCOME__ROUTE} element={<Welcome/>}></Route>
      <Route key={CONTACT__ROUTE} path={CONTACT__ROUTE} element={<Contacts/>}></Route>
      <Route key={CATALOG__ROUTE} path={CATALOG__ROUTE} element={<Catalog/>}></Route>
      <Route path="/*" element={<Navigate replace to={WELCOME__ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
