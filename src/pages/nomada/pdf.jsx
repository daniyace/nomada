import React from 'react';
import PDF from '../../docs/NOMADA.pdf';

const pdf = () => {
  return (
    <div>
      <embed
        src={PDF}
        title='NOMADA'
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      ></embed>
    </div>
  );
};

export default pdf;
