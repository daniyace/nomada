import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const Pdf = () => {
  useEffect(() => {
    navigate('/nomada/');
  }, []);

  return <></>;
};

export default Pdf;
