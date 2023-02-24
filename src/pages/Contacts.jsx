import React from "react";
import "../style/contacts.scss";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const Contacts = () => {
  return (
    <div>
      <div className="contacts__title">Заинтересовала наша продукция?</div>
      <div className="contacts__wrapper">
        <div className="left__side">
          <div className="inf">
            <Typography>
              <Title> Контакты и реквизиты организации ООО "Альянс":</Title>
              <Title level={3}> ИНН/КПП:</Title>
              <Text>1657238080/165701001</Text>
              <Title level={3}>Адрес офиса:</Title>
              <Text>
                420059 РТ, Казань, ул. Оренбургский тракт, д.160 офис 311{" "}
              </Text>
              <Title level={3}>Адрес склада:</Title>
              <Text>г. Казань, ул. Тихорецкая, д.2 </Text>
              <Title level={3}>Режим работы:</Title>
              <Text>Пн-Пт: с 8:00 до 17:00 Сб-Вс: Выходной </Text>
              <Title level={3}>Контакты отдела продаж:</Title>
              <Text>
                +7 (917) 270-09-99 +7 (958) 136-92-02 +7 (958) 136-07-08
              </Text>
            </Typography>
          </div>
        </div>
        <div className="right__side">
          <div className="map__title">
            {" "}
            <Typography>
              <Title level={2}>Мы на картах:</Title>
            </Typography>{" "}
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.4066931919597!2d49.18336731580856!3d55.73406238054835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eae87a4d00781%3A0x56b1b7db3d1b0abc!2z0YPQuy4g0J7RgNC10L3QsdGD0YDQs9GB0LrQuNC5INGC0YDQsNC60YIsIDExNiwg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCA0MjAxMzg!5e0!3m2!1sru!2sru!4v1677267938440!5m2!1sru!2sru"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
