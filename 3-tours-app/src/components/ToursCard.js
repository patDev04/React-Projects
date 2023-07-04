import React, { useState } from 'react';
import './tours.scss';

const ToursCard = ({ tour, removeTour }) => {
  const { id, name, price, info, image } = tour;

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt="tour-img" />
      <div className="content">
        <div className="header">
          <h4>{name}</h4>
          <h5 className="price">£{price}</h5>
        </div>
        <p>
          {readMore ? info : info.substring(0, 200)}...
          <span
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </span>
        </p>
      </div>
      <button className="remove-btn" onClick={() => removeTour(id)}>
        Not interested
      </button>
    </article>
  );
};

export default ToursCard;
