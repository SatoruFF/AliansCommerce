import React from "react";
import "../style/footer.scss";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import viber from "../assets/viber-white-icon.webp";
import telegram from "../assets/telegram-white-icon.webp";
import _ from "lodash-es";
const { Paragraph } = Typography;

const Footer = ({ search }) => {
  const contactsStyle = {
    color: "white",
  };
  const contactsStyleBtn = {
    marginTop: "25px",
    width: "auto",
  };
  return (
    <div
      className="footer__wrapper"
      style={!_.isEmpty(search) ? { display: "none" } : {}}
    >
      <div className="footer__items">
        <div className="footer__item">
          <Button style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <PhoneOutlined style={{ color: "white", marginRight: "5px" }} />
              +7 917 270 09 99
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item">
          <Button style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <MailOutlined style={{ color: "white", marginRight: "5px" }} />
              alyansbum@mail.ru
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item">
          <Button style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <img
                src={viber}
                style={{ color: "white", marginRight: "5px", marginTop: "3px" }}
                className="footer__viber-logo"
              />
              +7 980 915 80 49
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item">
          <Button style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <img
                src={telegram}
                style={{ color: "white", marginRight: "5px", marginTop: "3px" }}
                className="footer__viber-logo"
              />
              +7 980 915 72 36
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item">
          <Button style={contactsStyleBtn} ghost>
            <Paragraph style={contactsStyle}>Все права защищены.</Paragraph>
          </Button>
        </div>
        <div className="footer__item signature">MADE BY SATORUF</div>
      </div>
    </div>
  );
};

export default Footer;
