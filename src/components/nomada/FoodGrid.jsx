import React from 'react';
import Masonry from 'react-masonry-css';
import FoodCard from './FoodCard';
import './styles/grid.sass';

const FoodGrid = ({ products, isLoading }) => {
  const breakpointColumnsObj = {
    default: 3,
    1199: 2,
    768: 1,
  };

  return (
    <div className='grid'>
      {isLoading ? (
        <div className='d-flex justify-content-center mt-3'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>cargando...</span>
          </div>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {products.map((list, index) => (
            <FoodCard
              key={index}
              data={list.products}
              title={list.type.toUpperCase()}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default FoodGrid;
