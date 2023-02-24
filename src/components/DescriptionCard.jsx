import React from 'react';
import '../style/descriptionCard.scss';

const DescriptionCard = ({...props}) => {
    return (
        <div className='desc__wrapper'>
            <img src={props.img} alt="" />
            {console.log({...props.img})}
            <div className="title">{props.children}</div>
        </div>
    );
}

export default DescriptionCard;