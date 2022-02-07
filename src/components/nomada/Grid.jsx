import React from 'react';
import Masonry from 'react-masonry-css';
import Card from './card';
import '../../styles/nomada/grid.sass';

const Grid = ({ products, isLoading }) => {
  const breakpointColumnsObj = {
    default: 3,
    1199: 2,
    768: 1,
  };

  return (
    <div className='grid'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {products.map((list, index) => (
          <Card
            key={index}
            data={list.products}
            title={list.type.toUpperCase()}
            isLoading={isLoading}
          />
        ))}
        {/*  <Card data={bebidas} title={'BEBIDAS'} isLoading={isLoading} />
        <Card data={mixologia} title={'MIXOLOGÍA'} isLoading={isLoading} />
        <Card data={tequilas} title={'TEQUILA'} isLoading={isLoading} />
        <Card data={whisky} title={'WHISKY'} isLoading={isLoading} />
        <Card data={Cognac} title={'COGNAC'} isLoading={isLoading} />
        <Card data={gin} title={'GIN'} isLoading={isLoading} />
        <Card data={brandy} title={'BRANDY'} isLoading={isLoading} />
        <Card data={ron} title={'RON'} isLoading={isLoading} />
        <Card data={vodka} title={'VODKA'} isLoading={isLoading} />
        <Card data={vino} title={'VINO'} isLoading={isLoading} />
        <Card data={cerveza} title={'CERVEZA'} isLoading={isLoading} /> */}
      </Masonry>
    </div>
  );
};

export default Grid;
