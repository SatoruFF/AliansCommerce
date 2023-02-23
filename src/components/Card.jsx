import React, { useState } from 'react'
import Button from './Button';
import '../style/card.scss'

const Card = ({...props}) => {

    return (
        <div className='card'>
            <img src={props.img} alt="р" />
            <p className='card__title'>{props.children}</p>
                <Button id={props.id} redir={props.redir}>подробнее</Button>
        </div>
    );
}

export default Card;