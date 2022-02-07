import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import GridRestaurant from '../components/GridRestaurant';
import '../styles/global.sass';

const index = () => {
  return (
    <>
      <Seo title='Menú web para restaurantes' />
      <Layout>
        <h2 className='text-center mt-3'>Comercios afiliados</h2>
        <section className='container grid-container'>
          <GridRestaurant />
        </section>
      </Layout>
    </>
  );
};

export default index;
