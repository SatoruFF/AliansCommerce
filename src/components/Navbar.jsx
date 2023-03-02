import React from "react";
import { CATALOG__ROUTE, CONTACT__ROUTE, WELCOME__ROUTE } from "../utils/consts.js";
import { NavLink, useLocation } from "react-router-dom";
import "../style/navbar.scss";
import { Button } from "antd";
import mainIcon from '../assets/AllianceIcon.jpg'

const Navbar = () => {

  const where = useLocation()

  return (
    <div className="navbar__wrapper">
      <div className="navigation content">
        <div className="navbar__item navbar__logo">
        <NavLink to={WELCOME__ROUTE}><img src={mainIcon} alt="" /></NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={WELCOME__ROUTE}><Button shape="round" size="large" type={where.pathname == WELCOME__ROUTE ? 'primary' : 'text'}>Главная</Button></NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CATALOG__ROUTE}><Button shape="round" size="large" type={where.pathname == CATALOG__ROUTE ? 'primary' : 'text'}>Каталог</Button></NavLink>
        </div>
        <div className="navbar__item">
            <NavLink to={CONTACT__ROUTE}><Button shape="round" size="large" type={where.pathname == CONTACT__ROUTE ? 'primary' : 'text'}>Контакты</Button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
