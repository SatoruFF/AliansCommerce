import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../style/itemInfo.scss";
import { papers } from "../model/papers.js";
import MyFooter from "../components/Footer.jsx";
import { Carousel } from "antd";
import { Anchor } from "antd";

const ItemInfo = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [pic, setPic] = useState(null);

  const itemId = useParams();

  useEffect(() => {
    papers.forEach((elem) => {
      if (elem.id == +itemId.id) {
        setCurrentItem(elem);
        setPic(elem.images);
      }
    });
  }, [currentItem]);

  return (
    <div>
      {currentItem !== null ? (
        <div className="work" id="part-1">
          <div className="item-info__wrapper">
            <div className="item-info__navigation">
              <Anchor
                сlassName="item-info__anchor"
                items={[
                  {
                    key: "part-1",
                    href: "#part-1",
                    title: "Описание",
                  },
                  {
                    key: "part-2",
                    href: "#part-2",
                    title: "Характеристики",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Смотрите так же",
                  },
                ]}
              />
            </div>
            <div className="work__wrapper">
              <div className="work__wrapper__space content">
                <div className="itemInfo__left__side">
                  <div className="itemInfo__left__carousel-space">
                    <div className="image">
                      {pic !== null && (
                        <Carousel autoplay={true}>
                          {pic.map((image) => (
                            <div key={Math.random()}>
                              <img src={image.img} alt="" />
                            </div>
                          ))}
                        </Carousel>
                      )}
                    </div>
                  </div>
                </div>
                <div className="itemInfo__right__side">
                  <div className="item-info-descr__title">
                    {currentItem.title}
                  </div>
                  <div className="item__description">
                    <p>{currentItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="variants" id="part-2">
              <div className="variants-content content">
                <div className="variants__title">
                  <p>Характеристики</p>
                </div>
              </div>
            </div>
            <div className="other__products" id="part-3"></div>
            <MyFooter></MyFooter>
          </div>
        </div>
      ) : (
        <h1>
          Что то не так. <br />
          попробуйте перезагрузить страницу.
        </h1>
      )}
    </div>
  );
};

export default ItemInfo;
