import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo-white.png';

const Layout = ({ children }) => {
  return (
    <>
      <nav className='navbar navbar-dark bg-black sticky-top'>
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
                  <Link to='/' className='nav-link color-black' activeClassName='active'>
                    Inicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className='bg-black '>{children}</main>
      <div className='container text-center pb-1 sticky-bottom bg-black '>
        <small className='bottom-text text-white'>
          Nómada &copy; {new Date().getFullYear()} por{' '}
          <a
            href='https://github.com/daniyace'
            target={'_blank'}
            rel='noopener noreferrer'
            className='text-white'
          >
            Daniyace
          </a>
        </small>
      </div>
    </>
  );
};

export default Layout;
