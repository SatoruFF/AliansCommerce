import React from "react";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts.js";
import { NavLink, useLocation } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {

  const where = useLocation()

  return (
    <div className="navbar__wrapper">
      <div className="navigation">
        <div className="navbar__item">
            <NavLink className={where.pathname == WELCOME__ROUTE ? 'navLink clicked' : 'navLink'} to={WELCOME__ROUTE}>Главная</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink className={where.pathname == CATALOG__ROUTE ? 'navLink clicked' : 'navLink'} to={CATALOG__ROUTE}>Каталог</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink className={where.pathname == CONTACT__ROUTE ? 'navLink clicked' : 'navLink'} to={CONTACT__ROUTE}>Контакты</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
