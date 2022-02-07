import React from 'react';

const Card = ({ data, title, isLoading }) => {
  const formatMoney = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const sortByPrice = (array) => {
    if (array.length > 0) {
      return array[0].metadata.precio
        ? array.sort(
            (a, b) =>
              parseFloat(a.metadata.precio) - parseFloat(b.metadata.precio)
          )
        : array.sort(
            (a, b) => parseFloat(a.metadata.copa) - parseFloat(b.metadata.copa)
          );
    } else return [];
  };

  return (
    <>
      <div className='data-card'>
        <h2 className='data-card-title text-center m-0 py-2'>{title}</h2>
        {isLoading ? (
          <div className='d-flex justify-content-center mt-3'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>cargando...</span>
            </div>
          </div>
        ) : (
          <div className='data-card-body'>
            {!data[0]?.metadata.precio && (
              <div className='d-flex pt-1'>
                <div className='col-6'></div>
                <div className='col-6 d-flex'>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder'>Copa</span>
                  </div>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder'>Botella</span>
                  </div>
                </div>
              </div>
            )}
            {sortByPrice(data).map((item, index) => (
              <div
                key={index}
                className={
                  item.metadata.precio
                    ? 'd-flex data-card-row justify-content-between align-items-center'
                    : 'd-flex data-card-row align-items-center'
                }
              >
                <p className={item.metadata.precio ? 'm-0' : 'm-0 col-6'}>
                  {item.metadata.nombre}
                </p>
                {item.metadata.precio && (
                  <p className='m-0'>
                    <span>{formatMoney(item.metadata.precio)}</span>
                  </p>
                )}
                {!item.metadata.precio && (
                  <p className='m-0 col-6 d-flex justify-content-end'>
                    <span className='col-6 text-end'>
                      {formatMoney(item.metadata.copa)}
                    </span>
                    <span className='col-6 text-end'>
                      {formatMoney(item.metadata.botella)}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
