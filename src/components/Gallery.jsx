import React, { useState, useEffect } from "react";
import _ from "lodash-es";

import "../style/gallery.scss";
import Card from "../components/Card.jsx";
import formattedPapers from "../model/index.js";

const Gallery = ({ search, redir }) => {
  const [filteredPapers, setFilteredPapers] = useState(formattedPapers);

  useEffect(() => {
    if (!_.isEmpty(search)) {
      const results = formattedPapers.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredPapers(results);
    } else {
      setFilteredPapers(formattedPapers);
    }
  }, [search]);

  return (
    <div className="catalog__items animate__animated animate__fadeInUp content">
      {filteredPapers.map(({ id, title, images }) => (
        <Card key={id} id={id} redir={redir} img={images[0].img}>
          {title}
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
