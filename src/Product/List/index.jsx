import React from 'react';
import styled from 'styled-components';

import CategoryDescription from './CategoryDescription';
import Filter from './Filter';
import Products from './Products';

const Divine = styled.hr`
  margin: 1rem 0 3rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    margin: 2rem 0 0;
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
        to: '/men/clothing/1',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 2,
        to: '/men/clothing/2',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Classic fit',
        title: 'The Kensington – Mid-Length Heritage Trench Coat',
        avaliableColours: 2,
        price: 1700,
      },
      {
        id: 3,
        to: '/men/clothing/3',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Toilered fit',
        title: 'The Sandringham – Mid-length Heritage Trench Coat',
        avaliableColours: 4,
        price: 1700,
      },
      {
        id: 4,
        to: '/men/clothing/4',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Relaxed fit',
        title: 'The Chelsea – Short Heritage Trench Coat',
        avaliableColours: 1,
        price: 1700,
      },
      {
        id: 5,
        to: '/men/clothing/5',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 4,
        price: 1700,
      },
      {
        id: 6,
        to: '/men/clothing/6',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Classic fit',
        title: 'The Kensington – Long Heritage Trench Coat',
        avaliableColours: 1,
        price: 1700,
      },
      {
        id: 7,
        to: '/men/clothing/7',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Toilored fit',
        title: 'The Sandringham Short Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 8,
        to: '/men/clothing/8',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&wid=303',
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
        to: '/men/clothing/9',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&wid=303',
        label: 'Relaxed fit',
        title: 'The Westminster – Long Heritage Trench Coat',
        avaliableColours: 3,
        price: 1700,
      },
      {
        id: 10,
        to: '/men/clothing/10',
        image:
          'https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&wid=303',
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
    <CategoryDescription />
    <Filter />
    <div className="container">
      <Products header={products[0].header} list={products[0].list} />
      <Divine />
      <Products header={products[1].header} list={products[1].list} />
    </div>
  </main>);
