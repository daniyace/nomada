import React from 'react';
import mix from '../../images/nomada/mix.jpeg';
import bebidas from '../../images/nomada/bebidas.jpeg';
import tequila from '../../images/nomada/tequila.jpg';
import vinos from '../../images/nomada/vinos.jpeg';
import cervezas from '../../images/nomada/cervezas.jpeg';
import whiskey from '../../images/nomada/whiskey.jpeg';
import cognac from '../../images/nomada/cognac.jpeg';
import brandy from '../../images/nomada/brandy.jpeg';
import ron from '../../images/nomada/ron.jpg';
import ginebra from '../../images/nomada/ginebra.jpg';
import vodka from '../../images/nomada/vodka.jpg';

const DrinkCard = ({ data, title, isLoading }) => {
  const formatMoney = (amount) => {
    return amount < 0
      ? 'Según peso'
      : amount?.toLocaleString('en-US', {
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
        <div className='data-card-title'>
          <p
            className=' text-center m-0 py-2 fs-4 bg-white'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${title}`}
            aria-expanded='false'
            aria-controls={title}
          >
            {title}
          </p>
          <div className='arrow-left'></div>
        </div>
        <div className='collapse' id={title}>
          <div className='data-card-body mt-3'>
            {!data[0]?.metadata.precio && (
              <div className='d-flex pt-1'>
                <div className='col-6'></div>
                <div className='col-6 d-flex text-white'>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder mini-text'>Copa</span>
                  </div>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder mini-text'>Botella</span>
                  </div>
                </div>
              </div>
            )}
            {sortByPrice(data).map((item, index) => (
              <div
                key={index}
                className={
                  item.metadata.precio
                    ? 'd-flex data-card-row justify-content-between align-items-center text-white'
                    : 'd-flex data-card-row align-items-center text-white'
                }
              >
                <p
                  className={
                    item.metadata.precio ? 'm-0 name' : 'm-0 col-6 name'
                  }
                >
                  {item.metadata.nombre}
                </p>
                {item.metadata.precio && (
                  <p className='m-0 price'>
                    <span>{formatMoney(item.metadata.precio)}</span>
                  </p>
                )}
                {!item.metadata.precio && (
                  <p className='m-0 col-6 d-flex justify-content-end price'>
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
        </div>
        {title === 'MIXOLOGIA' && (
          <div className='container mt-3'>
            <img
              src={mix}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'BEBIDAS' && (
          <div className='container mt-3'>
            <img
              src={bebidas}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'TEQUILA' && (
          <div className='container mt-3'>
            <img
              src={tequila}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'VINOS' && (
          <div className='container mt-3'>
            <img
              src={vinos}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'CERVEZA' && (
          <div className='container mt-3'>
            <img
              src={cervezas}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'WHISKY' && (
          <div className='container mt-3'>
            <img
              src={whiskey}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'COGNAC' && (
          <div className='container mt-3'>
            <img
              src={cognac}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'BRANDY' && (
          <div className='container mt-3'>
            <img
              src={brandy}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'RON' && (
          <div className='container mt-3'>
            <img
              src={ron}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'GINEBRA' && (
          <div className='container mt-3'>
            <img
              src={ginebra}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {
          title === 'VODKA' && (
            <div className='container mt-3'>
              <img
                src={vodka}
                alt={title}
                className='img-fluid'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#${title}`}
                aria-controls={title}
              />
            </div>)
        }
      </div>
    </>
  );
};

export default DrinkCard;
