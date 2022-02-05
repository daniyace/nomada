import { Link } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import '../styles/global.sass';
import logo from '../images/logo.png';
import Seo from '../components/Seo';

const index = () => {
  return (
    <>
      <Seo title='Menú Nómada' />
      <nav className='navbar navbar-light bg-light sticky-top'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='Nómada' className='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex={-1}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
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
                    Menú
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className='container grid-container'>
        <Grid />
      </section>
    </>
  );
};

export default index;
