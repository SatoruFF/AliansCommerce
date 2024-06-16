import React, { useState } from "react";
import Button from "./Button";
import { Image } from "antd";
import "../style/card.scss";

const Card = ({ ...props }) => {
  return (
    <div className="card">
      <div className="card__image-main">
        <Image loading="lazy" className="card__image" width={'100%'} preview={false} src={props.img} />
      </div>
      <p className="card__title">{props.children}</p>
      <Button id={props.id} redir={props.redir}>
        подробнее
      </Button>
    </div>
  );
};

export default Card;
