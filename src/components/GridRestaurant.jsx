import React from 'react';
import Masonry from 'react-masonry-css';
import RestaurantCard from './RestaurantCard';
import '../styles/restaurant_grid.sass';
import logo from '../images/logo.png';

const breakpointColumnsObj = {
  default: 3,
  1199: 2,
  768: 1,
};

const restaurants = [
  {
    name: 'Nómada',
    page: 'nomada',
    address: 'Carretera Jiquilpan - Sahuayo KM3',
    img: logo,
  },
];

const GridRestaurant = () => {
  return (
    <div className='grid'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </Masonry>
    </div>
  );
};

export default GridRestaurant;
