import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: 'Menú Nómada',
        },
      ]}
    />
  );
};

export default Seo;
