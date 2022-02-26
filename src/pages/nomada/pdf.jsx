import React from 'react';
import Seo from '../../components/Seo';
import PDF from '../../docs/NOMADA.pdf';
import M1 from '../../docs/m1.png';
import M2 from '../../docs/m2.png';

const pdf = () => {
  return (
    <>
      <Seo title='Nómada' />
      <div className='container'>
        <img src={M1} alt='' className='img-fluid' />
        <img src={M2} alt='' className='img-fluid' />
      </div>
    </>
  );
};

export default pdf;
