import React, { useRef } from "react";
import "../style/welcome.scss";
import logo from "../assets/AllianceIcon.jpg";
import arrow from "../assets/arrow.png";
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
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam. Excepturi eum voluptates id est consectetur velit corrupti accusantium reprehenderit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
      </div>
      <div className="privilege">
        <p className="content__title">Преимущества</p>
            <div className="priv__wrapper">
                <div className="priv__item"> <img src="" alt="" /> <p>  </p> </div>
                <div className="priv__item"> <img src="" alt="" /> <p>  </p> </div>
                <div className="priv__item"> <img src="" alt="" /> <p>  </p> </div>
                <div className="priv__item"> <img src="" alt="" /> <p>  </p> </div>
            </div>
      </div>
    </div>
  );
};

export default Welcome;
