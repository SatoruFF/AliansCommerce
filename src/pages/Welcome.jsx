import React, { useRef } from "react";
import "../style/welcome.scss";
//import logo from "../assets/AllianceMainLogo.jpg";
import logo from "../assets/AllianceIcon.jpg";
import arrow from "../assets/arrow.png";

import like from "../assets/like.png";
import garant from "../assets/guarantee.png";
import speed from "../assets/download-speed.png";
import health from "../assets/health.png";

import { Link, animateScroll as scroll } from "react-scroll";
import { Carousel, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const Welcome = () => {
  return (
    <div className="welcome__wrapper">
      <div className="welcome__main animate__animated animate__fadeInUp">
        <p className="welcome__brand__title">Альянс</p>
        <p className="welcome__main__title">
          Бумага разных сортов и видов <br /> Мы поставляем качественную бумагу
          на рынок уже более 10 лет
        </p>
        <Link
          activeClass="active"
          to="welcome__about"
          spy={true}
          className="main__arrow"
          smooth={true}
          duration={500}
        >
          <img src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="welcome__about">
        <p className="welcome__content__title first">О компании</p>
        <div className="welcome__about__wrapper">
          <div className="welcome__about__logo">
            <img src={logo} alt="" />
          </div>
          <div className="welcome__about__text">
            Наша компания "Альянс" работает только с качественными материалами.
            Организация создана чтобы удовлетворить спрос других организаций или
            людей на бумажную продукцию. Мы имеем более 10 лет опыта в этой
            сфере и готовы предложить вам гарантию на наше качество.
          </div>
        </div>
      </div>
      <div className="privilege">
        <div className="priv__conteiner">
          <p className="welcome__content__title">Преимущества</p>
          <div className="priv__wrapper">
            <div className="priv__item">
              <img src={like} alt="" /> <p className="bold"> Ассортимент </p>
              <br /> <p> Огромный выбор товаров на любой вкус </p>
            </div>
            <div className="priv__item">
              <img src={speed} alt="" /> <p className="bold"> Скорость </p>{" "}
              <br />
              <p> Быстрый подбор необходимых вам материалов </p>
            </div>
            <div className="priv__item">
              <img src={health} alt="" /> <p className="bold"> Безопасность </p>
              <br />
              <p>
                Ответсвенность за соблюдение <br /> норм хранения и
                транспортировки материалов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="products__title">Что мы вам предлагаем?</div>
        <div className="carousel__space">
          <div className="carousel">
            <Carousel autoplay>
              <div>
                <h3 className="carousel__item one">Пергамент</h3>
              </div>
              <div>
                <h3 className="carousel__item two">Подпергамент</h3>
              </div>
              <div>
                <h3 className="carousel__item three">Эколин</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
