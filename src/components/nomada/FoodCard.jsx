import React, { useState } from 'react';
import tap from '../../images/nomada/tap.gif';
import provoleta from '../../images/nomada/provoleta.jpeg';
import tacos from '../../images/nomada/tacos.jpeg';
import pepita from '../../images/nomada/pepita.jpeg';
import hamburguesa from '../../images/nomada/hamburguesa.jpeg';
import ninos from '../../images/nomada/ninos.jpeg';
import mar from '../../images/nomada/mar.jpeg';
import tierra from '../../images/nomada/tierra.jpeg';
import pizza from '../../images/nomada/pizza.jpeg';
import postre from '../../images/nomada/postre.jpeg';
import cafe from '../../images/nomada/cafe.jpg';
import pasta from '../../images/nomada/pasta.jpeg';
import ensalada from '../../images/nomada/ensalada.jpg';

const FoodCard = ({ data, title, isLoading, index }) => {
  const [showTap, setShowTap] = useState(true);
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
              Math.abs(parseFloat(a.metadata.precio)) -
              Math.abs(parseFloat(b.metadata.precio))
          )
        : array.sort(
            (a, b) =>
              Math.abs(parseFloat(a.metadata.copa)) -
              Math.abs(parseFloat(b.metadata.copa))
          );
    } else return [];
  };

  return (
    <>
      <div className='data-card'>
        <div className='data-card-title'>
          <p
            className=' text-center m-0 py-2 fs-4 bg-white text-uppercase'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${title}`}
            aria-expanded='false'
            aria-controls={title}
            onClick={() => setShowTap(false)}
          >
            {title === 'HAMBURGUESAS-GOURMET' ? (
              <span>
                HAMBURGUESAS <br /> GOURMET
              </span>
            ) : title === 'NINOS' ? (
              'NIÑOS'
            ) : title === 'PIZZAS' ? (
              <span>
                PIZZAS A <br /> LA LEÑA
              </span>
            ) : (
              title
            )}
          </p>
          <div className='arrow-left'></div>

          {showTap && index === 0 && (
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
            >
              <img src={tap} alt='' className='img-fluid' width={'60px'} />
            </div>
          )}
        </div>
        <div className='collapse' id={title}>
          <div className='data-card-body pt-3'>
            {!data[0]?.metadata.precio && (
              <div className='d-flex'>
                <div className='col-6'></div>
                <div className='col-6 d-flex text-white'>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder mini-text'>Individual</span>
                  </div>
                  <div className='col-6 text-end'>
                    <span className='fw-bolder mini-text'>Grande</span>
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
                      : 'd-flex data-card-row align-items-center  justify-content-between  text-white'
                  }
                >
                  <p
                    className={
                      item.metadata.precio && !item.metadata.importado
                        ? 'm-0 name'
                        : 'm-0 name col-5'
                    }
                  >
                    {item.metadata.nombre}
                  </p>

                  {item.metadata.importado && (
                    <p className='m-0 col-4 text-end price me-2'>
                      <small className='mini-text'>IMPORTADO</small>
                      <br />
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
                        {item.metadata.importado && (
                          <>
                            <small className='mini-text'>NACIONAL</small>
                            <br />
                          </>
                        )}
                        {formatMoney(item.metadata.precio)}
                      </span>
                    </p>
                  )}
                  {!item.metadata.precio && (
                    <p className='m-0 col-6 d-flex justify-content-end'>
                      <span className='col-6 text-end'>
                        {formatMoney(item.metadata.individual)}
                      </span>
                      <span className='col-6 text-end'>
                        {formatMoney(item.metadata.grande)}
                      </span>
                    </p>
                  )}
                </div>
                {item.metadata.descripcion && (
                  <p className='m-0 text-white description text-guiones text-uppercase'>
                    {item.metadata.descripcion}
                  </p>
                )}
              </div>
            ))}
            {title === 'TIERRA' && (
              <>
                <p className='text-white text-center mt-3 text-uppercase'>
                  Guarnición a elegir, elote amarillo o puré de papa
                </p>
                <p className='text-white text-center mt-3 text-uppercase'>
                  Guarnición extra $30.00
                </p>
              </>
            )}
            {title === 'POSTRES' && (
              <>
                <p className='text-white text-center mt-3 text-uppercase'>
                  Pregunta por el postre del día
                </p>
              </>
            )}
            {title === 'HAMBURGUESAS-GOURMET' && (
              <>
                <p className='text-white text-center mt-3 text-uppercase'>
                  Todas acompañadas con papas a la francesa
                </p>
              </>
            )}
            {title === 'PIZZAS' && (
              <>
                <p className='text-white text-center mt-3 text-uppercase'>
                  Ingrediente extra $30.00
                </p>
              </>
            )}
          </div>
        </div>

        {title === 'ENTRADAS' && (
          <div className='container mt-3'>
            <img
              src={provoleta}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}

        {title === 'PEPITOS' && (
          <div className='container mt-3'>
            <img
              src={pepita}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'TACOS' && (
          <div className='container mt-3'>
            <img
              src={tacos}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'HAMBURGUESAS-GOURMET' && (
          <div className='container mt-3'>
            <img
              src={hamburguesa}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'NINOS' && (
          <div className='container mt-3'>
            <img
              src={ninos}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'MAR' && (
          <div className='container mt-3'>
            <img
              src={mar}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'TIERRA' && (
          <div className='container mt-3'>
            <img
              src={tierra}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'PIZZAS' && (
          <div className='container mt-3'>
            <img
              src={pizza}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'POSTRES' && (
          <div className='container mt-3'>
            <img
              src={postre}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'CAFE' && (
          <div className='container mt-3'>
            <img
              src={cafe}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'PASTAS' && (
          <div className='container mt-3'>
            <img
              src={pasta}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
        {title === 'ENSALADAS' && (
          <div className='container mt-3'>
            <img
              src={ensalada}
              alt={title}
              className='img-fluid'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${title}`}
              aria-controls={title}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FoodCard;
