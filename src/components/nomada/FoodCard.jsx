import React from 'react';

const FoodCard = ({ data, title, isLoading }) => {
  const formatMoney = (amount) => {
    return amount === -1 ? (
      'Según peso'
    ) : amount < -1 ? (
      <>
        <small className='me-2'>IMPORTADO</small>
        {(amount * -1).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </>
    ) : (
      amount?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    );
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
        <div className='data-card-title'>
          <p
            className=' text-center m-0 py-2 fs-2 bg-white'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${title}`}
            aria-expanded='false'
            aria-controls={title}
          >
            {title === 'HAMBURGUESAS-GOURMET'
              ? 'HAMBURGUESAS GOURMET'
              : title === 'NINOS'
              ? 'NIÑOS'
              : title}
          </p>
          <div className='arrow-left'></div>
        </div>
        <div className='collapse' id={title}>
          <div className='data-card-body mt-4'>
            {!data[0]?.metadata.precio && (
              <div className='d-flex pt-1'>
                <div className='col-6'></div>
                <div className='col-6 d-flex text-white'>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder'>Individual</span>
                  </div>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder'>Grande</span>
                  </div>
                </div>
              </div>
            )}
            {sortByPrice(data).map((item, index) => (
              <div key={index}>
                <div
                  className={
                    item.metadata.precio && !item.metadata.importado
                      ? 'd-flex data-card-row justify-content-between align-items-center text-white'
                      : 'd-flex data-card-row align-items-center text-white'
                  }
                >
                  <p
                    className={
                      item.metadata.precio && !item.metadata.importado
                        ? 'm-0'
                        : 'm-0 col-5'
                    }
                  >
                    {item.metadata.nombre}
                  </p>

                  {item.metadata.importado && (
                    <p className='m-0 col-4 text-end price'>
                      <small>IMPORTADO</small>{' '}
                      {formatMoney(item.metadata.importado)}
                    </p>
                  )}

                  {item.metadata.precio && (
                    <p
                      className={
                        !item.metadata.importado
                          ? 'm-0 price'
                          : 'm-0 col-3 text-end price'
                      }
                    >
                      <span>
                        {item.metadata.importado && <small>NACIONAL</small>}{' '}
                        {formatMoney(item.metadata.precio)}
                      </span>
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
              </div>
            ))}
            {title === 'TIERRA' && (
              <p className='text-white text-center mt-3 text-uppercase'>
                Guarnición a elegir
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
