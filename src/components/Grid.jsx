import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/grid.sass';
import Card from './card';

const Grid = () => {
  const [bebidas, setBebidas] = useState([]);
  const [isBebidasLoading, setIsBebidasLoading] = useState(true);
  const [mixologia, setMixologia] = useState([]);
  const [isMixologiaLoading, setIsMixologiaLoading] = useState(true);
  const [tequilas, setTequilas] = useState([]);
  const [isTequilasLoading, setIsTequilasLoading] = useState(true);
  const [whisky, setWhisky] = useState([]);
  const [isWhiskyLoading, setIsWhiskyLoading] = useState(true);
  const [Cognac, setCognac] = useState([]);
  const [isCognacLoading, setIsCognacLoading] = useState(true);
  const [gin, setGin] = useState([]);
  const [isGinLoading, setIsGinLoading] = useState(true);
  const [brandy, setBrandy] = useState([]);
  const [isBrandyLoading, setIsBrandyLoading] = useState(true);
  const [ron, setRon] = useState([]);
  const [isRonLoading, setIsRonLoading] = useState(true);
  const [vodka, setVodka] = useState([]);
  const [isVodkaLoading, setIsVodkaLoading] = useState(true);
  const [vino, setVino] = useState([]);
  const [isVinoLoading, setIsVinoLoading] = useState(true);
  const [cerveza, setCerveza] = useState([]);
  const [isCervezaLoading, setIsCervezaLoading] = useState(true);

  const getBebidas = async () => {
    setIsBebidasLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22bebidas%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setBebidas(res.data.objects);
          setIsBebidasLoading(false);
        }
      });
  };

  const getMixologia = async () => {
    setIsMixologiaLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22mixologias%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setMixologia(res.data.objects);
          setIsMixologiaLoading(false);
        }
      });
  };

  const getTequilas = async () => {
    setIsTequilasLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22tequilas%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setTequilas(res.data.objects);
          setIsTequilasLoading(false);
        }
      });
  };

  const getWhisky = async () => {
    setIsWhiskyLoading(true);
    await axios

      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22whiskies%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setWhisky(res.data.objects);
          setIsWhiskyLoading(false);
        }
      });
  };

  const getCognac = async () => {
    setIsCognacLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22cognacs%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setCognac(res.data.objects);
          setIsCognacLoading(false);
        }
      });
  };

  const getGin = async () => {
    setIsGinLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22ginegras%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setGin(res.data.objects);
          setIsGinLoading(false);
        }
      });
  };

  const getBrandy = async () => {
    setIsBrandyLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22brandies%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setBrandy(res.data.objects);
          setIsBrandyLoading(false);
        }
      });
  };

  const getRon = async () => {
    setIsRonLoading(true);
    await axios

      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22rons%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setRon(res.data.objects);
          setIsRonLoading(false);
        }
      });
  };

  const getVodka = async () => {
    setIsVodkaLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22vodkas%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setVodka(res.data.objects);
          setIsVodkaLoading(false);
        }
      });
  };

  const getVino = async () => {
    setIsVinoLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22vinos%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setVino(res.data.objects);
          setIsVinoLoading(false);
        }
      });
  };

  const getCerveza = async () => {
    setIsCervezaLoading(true);
    await axios
      .get(
        'https://api.cosmicjs.com/v2/buckets/nomada-menu/objects?pretty=true&query=%7B%22type%22%3A%22cervezas%22%7D&read_key=48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI&limit=20&props=metadata,'
      )
      .then((res) => {
        if (res.data) {
          setCerveza(res.data.objects);
          setIsCervezaLoading(false);
        }
      });
  };

  useEffect(() => {
    getBebidas();
    getMixologia();
    getTequilas();
    getWhisky();
    getCognac();
    getGin();
    getBrandy();
    getRon();
    getVodka();
    getVino();
    getCerveza();
  }, []);

  return (
    <div className='grid'>
      <Card data={bebidas} title={'BEBIDAS'} isLoading={isBebidasLoading} />
      <Card
        data={mixologia}
        title={'MIXOLOGÍA'}
        isLoading={isMixologiaLoading}
      />
      <Card data={tequilas} title={'TEQUILA'} isLoading={isTequilasLoading} />
      <Card data={whisky} title={'WHISKY'} isLoading={isWhiskyLoading} />
      <Card data={Cognac} title={'COGNAC'} isLoading={isCognacLoading} />
      <Card data={gin} title={'GIN'} isLoading={isGinLoading} />
      <Card data={brandy} title={'BRANDY'} isLoading={isBrandyLoading} />
      <Card data={ron} title={'RON'} isLoading={isRonLoading} />
      <Card data={vodka} title={'VODKA'} isLoading={isVodkaLoading} />
      <Card data={vino} title={'VINO'} isLoading={isVinoLoading} />
      <Card data={cerveza} title={'CERVEZA'} isLoading={isCervezaLoading} />
    </div>
  );
};

export default Grid;
