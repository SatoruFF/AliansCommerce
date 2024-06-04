import React, { useRef } from "react";
import "../style/welcome.scss";
// import logo from "../assets/AllianceMainLogo.jpg";
import logo from "../assets/AllianceIcon.jpg";
import arrow from "../assets/arrow.png";

import like from "../assets/like.png";
import speed from "../assets/download-speed.png";
import health from "../assets/health.png";

import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Carousel, Typography } from "antd";
import MyFooter from "../components/Footer.jsx";
const { Title, Paragraph, Text } = Typography;

const Welcome = () => {
  const contactsStyle = {
    color: "white",
  };
  const contactsStyleBtn = {
    backgroundColor: "#262626",
    marginTop: "25px",
    width: "auto",
  };

  return (
    <div className="welcome__wrapper animate__animated animate__fadeInUp">
      <div className="welcome__main">
        <div className="welcome__main-content content">
          <div className="welcome__main__left-side">
            <p className="welcome__brand__title">Альянс</p>
            <p className="welcome__main__title">
              Упаковка или как она должна работать.
            </p>
            <p className="welcome__main__sub-title">
              Заказ и консультации по телефону, так же можете написать нам на
              email:
              <div className="welcome__contacts-btns">
                <Button style={contactsStyleBtn} ghost>
                  <Paragraph
                    copyable
                    style={contactsStyle}
                    className="welcome_link-item"
                  >
                    +7 917 270 09 99
                  </Paragraph>
                </Button>
                <Button style={contactsStyleBtn} ghost>
                  <Paragraph
                    copyable
                    style={contactsStyle}
                    className="welcome_link-item"
                  >
                    alyansbum@mail.ru
                  </Paragraph>
                </Button>
              </div>
            </p>
            <div className="welcome__main__addition">
              <div className="welcome_addition-item">
                Доставка в кратчайшие сроки во все города РФ и СНГ.
              </div>
              <div className="welcome_addition-item">
                Гибкое ценообразование и доступные цены.
              </div>
              <div className="welcome_addition-item">
                Гарантия и сертифицированная продукция.
              </div>
              <div className="welcome_addition-item">
                Профессиональная помощь в подборе товара.
              </div>
            </div>
          </div>
          <div className="welcome__main__right-side">
            <div className="welcome__carousel-address"></div>
            <div className="welcome__main__carousel-space">
              <Carousel autoplay className="welcome-carousel">
                <div>
                  <h3 className="carousel__item-main carousel-item__one">
                    Пергамент
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__two">
                    Подпергамент
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__three">
                    Эколин
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__four">
                    Упаковочная бумага
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__five">
                    Кашированная фольга
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__six">
                    Стретч пленка
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__seven">
                    Бопп пленка
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__eight">
                    Стаканы
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__nine">
                    Дой паки
                  </h3>
                </div>
                <div>
                  <h3 className="carousel__item-main carousel-item__ten">
                    Подложки
                  </h3>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="welcome__anchor">
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
      </div>
      <div className="welcome__about">
        <p className="welcome__content__title">О нас</p>
        <div className="welcome__about__wrapper content">
          <div className="welcome__about__logo">
            <img src={logo} alt="" />
          </div>
          <div className="welcome__about__text">
            Альянс - это более 100 видов упаковок! <br /> С 2017 года наша
            компания поставляет упаковочную продукцию, удовлетворяющую самым
            высоким экологичным и национальным стандартам качества, постоянно
            расширяя ассортимент предлагаемой продукции. <br /> Стабильность и
            надежность работы компании подтверждают дружеские и доверительные
            отношения наших клиентов-партнеров среди них, крупные сети,
            предприятия малого и среднего бизнеса, которым необходим комплексный
            подход. <br /> Выбор нашей упаковки - это Ваша прибыль и успех!
          </div>
        </div>
      </div>
      <div className="privilege">
        <div className="priv__conteiner">
          <p className="welcome__content__title">Преимущества</p>
          <div className="priv__wrapper content">
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
                Ответственность за соблюдение <br /> норм хранения и
                транспортировки материалов
              </p>
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Welcome;
