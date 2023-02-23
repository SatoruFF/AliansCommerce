import React, { useRef } from "react";
import "../style/welcome.scss";
import logo from "../assets/AllianceIcon.jpg";
import arrow from "../assets/arrow.png";

import like from '../assets/like.png';
import garant from '../assets/guarantee.png';
import speed from '../assets/download-speed.png';
import health from '../assets/health.png';

import { Link, animateScroll as scroll } from "react-scroll";

const Welcome = () => {
  return (
    <div className="wrapper">
      <div className="main">
        {/* <p className='main__icon'> <img src={logo} alt="Альянс" /> </p> */}
        <p className="text__title">Альянс</p>
        <p className="main__title">
          Бумага разных сортов и видов <br /> Мы поставляем качественную бумагу
          на рынок уже более 10 лет
        </p>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          className="main__arrow"
          smooth={true}
          duration={500}
        >
          <img src={arrow} alt="Arrow" />
        </Link>
      </div>
      <div className="about">
        <p className="content__title first">О компании</p>
            <div className="about__wrapper">
                <img src={logo} alt="" />
                <p> Наша компания "Альянс" работает только с качественными материалами. Организация создана чтобы удовлетворить спрос других организаций или людей на бумажную продукцию. Мы имеем более 10 лет опыта в этой сфере и готовы предложить вам гарантию на наше качество.</p>
            </div>
      </div>
      <div className="privilege">
        <p className="content__title">Преимущества</p>
            <div className="priv__wrapper">
                <div className="priv__item"> <img src={like} alt="" /> <p className="bold"> Ассортимент </p> <br /> <p> Огромный выбор товаров на любой вкус </p> </div>
                <div className="priv__item"> <img src={speed} alt="" /> <p className="bold"> Скорость </p> <br /> <p> Быстрый подбор необходимых вам материалов </p>  </div>
                <div className="priv__item"> <img src={health} alt="" /> <p className="bold"> Безопасность </p> <br /> <p> Ответсвенность за соблюдение <br /> норм хранения и транспортировки материалов </p>  </div>
            </div>
      </div>
    </div>
  );
};

export default Welcome;
