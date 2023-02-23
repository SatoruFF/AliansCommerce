import React from 'react'
import '../style/catalog.scss'
import Card from '../components/Card.jsx'
import { papers } from '../model/papers.js'
import { useNavigate } from 'react-router-dom'
import { CATALOG__ROUTE } from '../utils/consts'


const Catalog = () => {

    const navigate = useNavigate()

    const redir = (id) => {
        console.log(id)
        navigate(CATALOG__ROUTE + '/' + id)
    }
    
    return (
        <div className='catalog__wrapper'>
            <div className="catalog__title">Наша продукция</div>
                <div className="catalog__items animate__animated animate__fadeInUp">
                    {papers.map(({id, title, img}) => 
                        <Card key={id} id={id} redir={redir} img={img}>{title}</Card>
                    )}
                </div>
        </div>
    );
}

export default Catalog;