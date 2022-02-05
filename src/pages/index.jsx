import React from 'react';
import Grid from '../components/Grid';
import '../styles/global.sass';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const index = () => {
  return (
    <>
      <Seo title='Menú Nómada' />
      <Layout>
        <section className='container grid-container'>
          <Grid />
        </section>
      </Layout>
    </>
  );
};

export default index;
