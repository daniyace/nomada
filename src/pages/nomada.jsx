import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Cosmic from 'cosmicjs';
import Swal from 'sweetalert2';
import Grid from '../components/nomada/Grid';
import Layout from '../components/nomada/Layout';
import Seo from '../components/Seo';
import '../styles/global.sass';

const api = Cosmic();

const bucket = api.bucket({
  slug: 'nomada-menu',
  read_key: '48zpPNPQZB7NwgDJ5jAXBcVdebzxBEHBhnyuvN5l7ZRYoKIuuI',
});

const fetchProducts = async () => {
  const data = await bucket.getObjects({
    props: 'type,metadata',
  });
  return data;
};

const fetchTypes = async () => {
  const data = await bucket.getObjectTypes();
  return data;
};

const NomadaIndex = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useSWR('fetch-products', fetchProducts);
  const { data: types, errort } = useSWR('fetch-types', fetchTypes);

  useEffect(() => {
    const extractType = (types, data) => {
      let aux = [];
      //order types by types.order
      types.object_types.sort((a, b) => a.order - b.order);
      types.object_types.forEach(async (type) => {
        await aux.push({
          type: type.slug,
          products: data.objects.filter((item) => item.type === type.slug),
        });
      });

      setProducts(aux);
      setIsLoading(false);
    };
    if (data && types) {
      extractType(types, data);
    }
    if (error || errort) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al cargar los datos',
        icon: 'error',
      });
    }
  }, [data, types, error, errort]);
  return (
    <>
      <Seo title='Nómada' />
      <Layout>
        <section className='container grid-container'>
          <Grid isLoading={isLoading} products={products} />
        </section>
      </Layout>
    </>
  );
};

export default NomadaIndex;
