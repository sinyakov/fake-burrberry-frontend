import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

import Header from './Header';
import List from './List';
import Show from './Show';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Route exact path="/products" component={List} />
        <Route path="/products/:id" component={Show} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
