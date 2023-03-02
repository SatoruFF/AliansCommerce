import React, { useState } from "react";
import "../style/catalog.scss";

import { useNavigate } from "react-router-dom";
import { CATALOG__ROUTE } from "../utils/consts";
import MyFooter from "../components/Footer.jsx";
import MyGallery from "../components/Gallery.jsx";
const Catalog = () => {
  const navigate = useNavigate();

  const redir = (id) => {
    navigate(CATALOG__ROUTE + "/" + id);
  };

  return (
    <div className="catalog__wrapper">
      <div className="catalog__content">
        <div className="catalog__title">Наша продукция</div>
        <MyGallery redir={redir}></MyGallery>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Catalog;
