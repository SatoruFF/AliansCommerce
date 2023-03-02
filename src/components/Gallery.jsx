import React from 'react';
import '../style/gallery.scss';
import Card from "../components/Card.jsx";
import { papers } from "../model/papers.js";

const Gallery = ({...props}) => {
    return (
        <div className="catalog__items animate__animated animate__fadeInUp">
          {papers.map(({ id, title, images }) => (
            <Card key={id} id={id} redir={props.redir} img={images[0].img}>
              {title}
            </Card>
          ))}
        </div>
    );
}

export default Gallery;