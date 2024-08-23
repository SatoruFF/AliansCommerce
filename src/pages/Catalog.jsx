import React, { useState } from "react";
import "../style/catalog.scss";

import { useNavigate } from "react-router-dom";
import { CATALOG__ROUTE } from "../utils/consts";
import MyFooter from "../components/Footer.jsx";
import MyGallery from "../components/Gallery.jsx";
import { Input } from "antd";
const Catalog = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const redir = (id) => {
    navigate(CATALOG__ROUTE + "/" + id);
  };

  return (
    <div className="catalog__wrapper">
      <div className="catalog__content">
        <div className="catalog__title">
          <p>Наша продукция</p>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            className="catalog__search"
            placeholder="Поиск товара..."
          />
        </div>

        <MyGallery redir={redir} search={search}></MyGallery>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Catalog;
