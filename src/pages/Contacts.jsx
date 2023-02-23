import React from "react";
import "../style/contacts.scss";

const Contacts = () => {
  return (
    <div>
      <div className="contacts__wrapper">
        <div className="contacts__title">Заинтересовала наша продукция?</div>
        <div className="leftSide">
          <div className="inf">
            Контакты ООО "Альянс" <br /> Реквизиты организации: ООО "Альянс" <br /> ИНН/КПП:
            1657238080/165701001 <br /> Адрес офиса: 420059 РТ, Казань, ул.
            Оренбургский тракт, д.160 офис 311 <br /> Адрес склада: г. Казань, ул.
            Тихорецкая, д.2 <br /> Режим работы: Пн-Пт: с 8:00 до 17:00 Сб-Вс: Выходной <br />
            Контакты отдела продаж: +7 (917) 270-09-99 +7 (958) 136-92-02 +7
            (958) 136-07-08
          </div>
        </div>
        <div className="rightSide">

        </div>
      </div>
    </div>
  );
};

export default Contacts;
