import React from "react";
import "../style/footer.scss";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  const contactsStyle = {
    color: "white",
  };
  const contactsStyleBtn = {
    marginTop: "25px",
    width: "auto",
  };
  return (
    <div className="footer__wrapper">
      <div className="footer__items">
        <div className="footer__item">
          <Button type="primary" style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <PhoneOutlined style={{ color: "white", marginRight: "5px" }} />8
              917 270 09 99
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item">
          <Button type="primary" style={contactsStyleBtn} ghost>
            <Paragraph copyable style={contactsStyle}>
              <MailOutlined style={{ color: "white", marginRight: "5px" }} />
              alyansbum@mail.ru
            </Paragraph>
          </Button>
        </div>
        <div className="footer__item signature">MADE BY RAMILYA</div>
      </div>
    </div>
  );
};

export default Footer;
