import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';

export const NotFoundPage = () => {
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <section>
            <div className='full_row error_wrapper flex_c_center_all'>
              <img src='../../assets/utils/images/error.png' alt='' />
              <h4> 404- Page not found </h4>
              <p>
                {' '}
                We’re having trouble finding the page <br /> you're looking for.{' '}
              </p>
              <Link to='/'>
                <button className='red_btn'> Back to home </button>
              </Link>
            </div>
          </section>

          <footer>
            <Footer />
          </footer>
        </section>
      </body>
    </Fragment>
  );
};
