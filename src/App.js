import React from 'react';
import 'normalize.css';
import 'flexboxgrid2';
import Helmet from 'react-helmet';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default () =>
  <div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>
    <Header />
    <Main />
    <Footer />
  </div>;
