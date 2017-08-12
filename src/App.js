import React from 'react';
import 'normalize.css';
import 'flexboxgrid2';
import Helmet from 'react-helmet';

import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  <IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  </IntlProvider>;
