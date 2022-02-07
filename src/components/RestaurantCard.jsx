import { Link } from 'gatsby';
import React from 'react';
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='rest-card'>
      <Link to={`/${restaurant.page}`}>
        <div className='rest-card__info'>
          <h3 className='rest-card__name text-center'>{restaurant.name}</h3>
        </div>
        <img
          src={restaurant.img}
          alt='logo'
          className='rest-card-img img-fluid'
        />
        <div className='rest-card__info'>
          <p className='rest-card__addres m-0 mt-3 text-center fs-5'>
            {restaurant.address}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
