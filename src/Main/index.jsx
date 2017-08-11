import React from 'react';

import Product from './Product';
import Recommend from './Recommend';
import Delivery from './Delivery';
import More from './More';

export default () => (
  <div className="container">
    <Product />
    <Delivery />
    <Recommend />
    <More />
  </div>
);