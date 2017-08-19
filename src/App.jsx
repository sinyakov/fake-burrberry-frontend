import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

import Header from './Header';
import Products from './Product/List';
import Product from './Product/Show';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Burrberry</title>
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/:section/" component={Products} />
          <Route exact path="/:section/:category" component={Products} />
          <Route path="/:section/:category/:id" component={Product} />
          <Redirect from="/" to="/men/clothing" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </IntlProvider>);
