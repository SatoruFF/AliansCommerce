import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { useParams } from "react-router-dom";
import "../style/itemInfo.scss";
import { papers } from "../model/papers.js";
import DescriptionCard from "../components/DescriptionCard.jsx";

const ItemInfo = () => {
  const [currentItem, setCurrentItem] = useState(null);
  // const [pic, setPic] = useState(null)

  const itemId = useParams();

  useEffect(() => {
    papers.forEach((elem) => {
      if (elem.id == +itemId.id) {
        setCurrentItem(elem);
      }
      // } if (currentItem) {
      //   setPic(currentItem.images)
      // }
    });
  }, [currentItem]);


  return (
    <div>
      {currentItem !== null ? (
        <div className="work">
          <div className="itemInfo__title__space">
            <div className="itemInfo__title">Описание</div>
          </div>
          <div className="work__wrapper">
            <div className="work__wrapper__space">
              <div className="itemInfo__left__side">
                <div className="itemInfo__left__side__card">
                  <div className="image">
                    <img src={currentItem.images[0].img} alt="" />
                  </div>
                  <div className="item__title">{currentItem.title}</div>
                </div>
              </div>
              <div className="itemInfo__right__side">
                <div className="item__description">
                  <p>{currentItem.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other">
            {/* {pic && pic.map((item) => {
              <DescriptionCard
                key={Math.random()}
                img={item}
              ></DescriptionCard>;
            })} */}
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
