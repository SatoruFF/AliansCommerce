import React, { useEffect, useState } from "react";
import Card from '../components/Card.jsx'
import { useParams } from "react-router-dom";
import "../style/itemInfo.scss";
import { papers } from "../model/papers.js";
import DescriptionCard from "../components/DescriptionCard.jsx";

const ItemInfo = () => {
  const [currentItem, setCurrentItem] = useState(null);

  const itemId = useParams();

  useEffect(() => {
    papers.forEach((elem) => {
      if (elem.id == +itemId.id) {
        setCurrentItem(elem);
      }
    });
  }, [currentItem]);

  return (
    <div>
      {currentItem !== null ? (
        <div className="work">
          <div className="work__wrapper">
            <div className="itemInfo__left__side">
              <div className="image">
                <img src={currentItem.images[0].img} alt="" />
              </div>
              <div className="item__title">{currentItem.title}</div>
            </div>
            <div className="itemInfo__right__side">
              <p className="opisanie">Описание</p>
              <div className="item__description">
                <p>{currentItem.description}</p>
              </div>
            </div>
          </div>
          <div className="other">
            {currentItem.images.map((item) => {
              <DescriptionCard key={Math.random()} img={item}></DescriptionCard>
            }
            )}
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
