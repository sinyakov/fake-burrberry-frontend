import React from 'react';

import Product from './Product';
import Recommend from './Recommend';
import Delivery from './Delivery';
import More from './More';

export default () =>
  (<main>
    <Product />
    <div className="container">
      <Delivery />
      <Recommend />
      <More />
    </div>
  </main>);
