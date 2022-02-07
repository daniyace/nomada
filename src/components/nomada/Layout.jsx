import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';

const Layout = ({ children }) => {
  return (
    <>
      <nav className='navbar navbar-light bg-light sticky-top'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/nomada'>
            <img src={logo} alt='Nómada' className='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasWithBothOptions'
            aria-controls='offcanvasWithBothOptions'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            data-bs-scroll='true'
            tabIndex={-1}
            id='offcanvasWithBothOptions'
            aria-labelledby='offcanvasWithBothOptionsLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Nómada
              </h5>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link' activeClassName='active'>
                    Inicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <div className='container text-center pb-1 sticky-bottom'>
        <small className='bottom-text'>
          Nómada &copy; 2022 por{' '}
          <a
            href='https://github.com/daniyace'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            Daniyace
          </a>
        </small>
      </div>
    </>
  );
};

export default Layout;
