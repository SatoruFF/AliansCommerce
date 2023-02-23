import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/itemInfo.scss';
import { papers } from '../model/papers.js'

const ItemInfo = () => {

    const [currentItem, setCurrentItem] = useState(null)

    const itemId = useParams()

    useEffect(() => {
        papers.forEach((elem) => {
            console.log(typeof elem.id)
            console.log(typeof itemId.id)
            if (elem.id == +itemId.id) {
                console.log('hello')
                setCurrentItem(elem)
            }
        })
    }, [currentItem])



    console.log(currentItem)

    return (
        <div>
            {currentItem !== null
            ?
            <div className="work__wrapper">
                <div className="leftSide">
                    <div className="image"> <img src={currentItem.img} alt="" /> </div>
                    <div className="item__title">
                        <p>{currentItem.title}</p>
                    </div>
                </div>
                <div className="right__side">
                    <p className='opisanie'>Описание</p>
                    <div className="item__description">
                        <p>{currentItem.description}</p>
                    </div>
                </div>
            </div>
            : <h1>notWork</h1>
            }

        </div>
    );
}

export default ItemInfo;