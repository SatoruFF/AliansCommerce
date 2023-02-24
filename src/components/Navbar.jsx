import React from "react";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts.js";
import { NavLink, useLocation } from "react-router-dom";
import "../style/navbar.scss";
import { Button } from "antd";

const Navbar = () => {

  const where = useLocation()

  return (
    <div className="navbar__wrapper">
      <div className="navigation">
        <div className="navbar__item">
            <NavLink to={WELCOME__ROUTE}><Button type={where.pathname == WELCOME__ROUTE ? 'primary' : 'text'}>Главная</Button></NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CATALOG__ROUTE}><Button type={where.pathname == CATALOG__ROUTE ? 'primary' : 'text'}>Каталог</Button></NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CONTACT__ROUTE}><Button type={where.pathname == CONTACT__ROUTE ? 'primary' : 'text'}>Контакты</Button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
