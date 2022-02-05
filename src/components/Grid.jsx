import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import useSWR from 'swr';
import Cosmic from 'cosmicjs';
import Card from './card';
import '../styles/grid.sass';

const api = Cosmic();

const bucket = api.bucket({
  slug: 'nomada-menu',
  read_key: '48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI',
});

const fetchPosts = async () => {
  const data = await bucket.getObjects({
    props: 'type,metadata',
  });
  return data;
};

const Grid = () => {
  const [bebidas, setBebidas] = useState([]);
  const [mixologia, setMixologia] = useState([]);
  const [tequilas, setTequilas] = useState([]);
  const [whisky, setWhisky] = useState([]);
  const [Cognac, setCognac] = useState([]);
  const [gin, setGin] = useState([]);
  const [brandy, setBrandy] = useState([]);
  const [ron, setRon] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [vino, setVino] = useState([]);
  const [cerveza, setCerveza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useSWR('fetch-posts', fetchPosts);

  useEffect(() => {
    if (data) {
      setBebidas(extractType('bebidas'));
      setMixologia(extractType('mixologias'));
      setTequilas(extractType('tequilas'));
      setWhisky(extractType('whiskies'));
      setCognac(extractType('cognacs'));
      setGin(extractType('ginegras'));
      setBrandy(extractType('brandies'));
      setRon(extractType('rons'));
      setVodka(extractType('vodkas'));
      setVino(extractType('vinos'));
      setCerveza(extractType('cervezas'));
      setIsLoading(false);
    }
  }, [data]);

  const extractType = (type) => {
    return data.objects.filter((item) => item.type === type);
  };

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
        <Card data={bebidas} title={'BEBIDAS'} isLoading={isLoading} />
        <Card data={mixologia} title={'MIXOLOGÍA'} isLoading={isLoading} />
        <Card data={tequilas} title={'TEQUILA'} isLoading={isLoading} />
        <Card data={whisky} title={'WHISKY'} isLoading={isLoading} />
        <Card data={Cognac} title={'COGNAC'} isLoading={isLoading} />
        <Card data={gin} title={'GIN'} isLoading={isLoading} />
        <Card data={brandy} title={'BRANDY'} isLoading={isLoading} />
        <Card data={ron} title={'RON'} isLoading={isLoading} />
        <Card data={vodka} title={'VODKA'} isLoading={isLoading} />
        <Card data={vino} title={'VINO'} isLoading={isLoading} />
        <Card data={cerveza} title={'CERVEZA'} isLoading={isLoading} />
      </Masonry>
    </div>
  );
};

export default Grid;
