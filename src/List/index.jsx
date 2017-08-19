import React from 'react';
import styled from 'styled-components';
import { XSonly } from '../Responsive';

import CategoryMenu from './CategoryMenu';
import CategoryDescription from './CategoryDescription';
import Filter from './Filter';
import Products from './Products';

const Divine = styled.hr`
  margin: 3rem 0 3rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    margin: 2rem 0 -1rem;
  }

  @media (min-width: 62rem) {
    margin: 2rem 0 0rem;
  }
`;

const products = [
  {
    header: 'Heritage Trench Coats',
    list: [
      {
        id: 1,
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 2,
        label: 'Classic fit',
        title: 'The Kensington – Mid-Length Heritage Trench Coat',
        avaliableColours: 2,
        price: 1700,
      },
      {
        id: 3,
        label: 'Toilered fit',
        title: 'The Sandringham – Mid-length Heritage Trench Coat',
        avaliableColours: 4,
        price: 1700,
      },
      {
        id: 4,
        label: 'Relaxed fit',
        title: 'The Chelsea – Short Heritage Trench Coat',
        avaliableColours: 1,
        price: 1700,
      },
      {
        id: 5,
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 4,
        price: 1700,
      },
      {
        id: 6,
        label: 'Classic fit',
        title: 'The Kensington – Long Heritage Trench Coat',
        avaliableColours: 1,
        price: 1700,
      },
      {
        id: 7,
        label: 'Toilored fit',
        title: 'The Sandringham Short Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 8,
        label: 'Slim fit',
        title: 'The Chelsea – Long Heritage Trench Coat',
        avaliableColours: 1,
        price: 1700,
      },
    ],
  },
  {
    header: 'Single Breasted Trench Coats',
    list: [
      {
        id: 9,
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 10,
        label: 'Online Exclusive',
        title: 'The Brighton – Longline Car Coat',
        avaliableColours: 2,
        price: 1700,
      },
    ],
  },
];

export default () =>
  (<main>
    <XSonly>
      <CategoryMenu />
    </XSonly>
    <CategoryDescription />
    <Filter />
    <div className="container">
      <Products header={products[0].header} list={products[0].list} />
      <Divine />
      <Products header={products[1].header} list={products[1].list} />
    </div>
  </main>);
