import React, { useState } from "react";
import Button from "./Button";
import "../style/card.scss";
import { Image } from "antd";

const Card = ({ ...props }) => {

  return (
    <div className="card">
        <Image
        src={props.img}
        />
      <p className="card__title">{props.children}</p>
      <Button id={props.id} redir={props.redir}>
        подробнее
      </Button>
    </div>
  );
};

export default Card;
