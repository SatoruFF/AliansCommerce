import React from "react";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navigation">
        <div className="navbar__item">
            <NavLink to={WELCOME__ROUTE}>Главная</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CATALOG__ROUTE}>Каталог</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CONTACT__ROUTE}>Контакты</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
