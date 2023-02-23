import React from 'react';
import '../style/descriptionCard.scss';

const DescriptionCard = ({...props}) => {
    return (
        <div className='desc__wrapper'>
            <img src={props} alt="" />
            {console.log({...props.img})}
            <div className="title">{props.children}</div>
        </div>
    );
}

export default DescriptionCard;