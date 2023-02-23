import React from "react";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts.js";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navigation">
        <div className="navbar__item">
            <NavLink className='navLink' to={WELCOME__ROUTE}>Главная</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink className='navLink' to={CATALOG__ROUTE}>Каталог</NavLink>
        </div>
        <div className="navbar__item">
            <NavLink className='navLink' to={CONTACT__ROUTE}>Контакты</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
