import React from "react";
import { Button, Typography } from "antd";
import { NavLink, useLocation } from "react-router-dom";

import {
  CATALOG__ROUTE,
  CONTACT__ROUTE,
  WELCOME__ROUTE,
} from "../utils/consts.js";
import "../style/navbar.scss";
import mainIcon from "../assets/AllianceIcon.jpg";

const { Title } = Typography;

const Navbar = () => {
  const where = useLocation();

  return (
    <div className="navbar__wrapper">
      <div className="navigation content">
        <div className="navbar__item navbar__logo">
          <NavLink to={WELCOME__ROUTE}>
            <img src={mainIcon} alt="" />
          </NavLink>
        </div>
        <Title
          style={where.pathname == CONTACT__ROUTE ? { display: "none" } : {}}
          className="navbar__item navbar__salesNumber"
          level={5}
        >
          +7 917 270-09-99
        </Title>
        <div className="navbar__item">
          <NavLink to={WELCOME__ROUTE}>
            <Button
              shape="round"
              size="large"
              className="navbar__button"
              type={where.pathname == WELCOME__ROUTE ? "primary" : "text"}
              ghost
            >
              Главная
            </Button>
          </NavLink>
        </div>
        <div className="navbar__item">
          <NavLink to={CATALOG__ROUTE}>
            <Button
              shape="round"
              size="large"
              className="navbar__button"
              type={where.pathname == CATALOG__ROUTE ? "primary" : "text"}
              ghost
            >
              Каталог
            </Button>
          </NavLink>
        </div>
        <div className="navbar__item">
          <NavLink to={CONTACT__ROUTE}>
            <Button
              shape="round"
              size="large"
              className="navbar__button"
              type={where.pathname == CONTACT__ROUTE ? "primary" : "text"}
              ghost
            >
              Контакты
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
