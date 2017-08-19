import React from 'react';
import styled from 'styled-components';
import ProductCard from '../common/ProductCard';

const Recommend = styled.section`
  padding: 3rem 0 0;

  @media (min-width: 48rem) {
    padding: 1.5rem 0 2rem;
  }
`;

const Heading = styled.h2`
  margin: 0 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;

  @media (min-width: 62rem) {
    margin: 0 0 2rem;
    text-align: center;
  }
`;

const recommendations = [
  {
    id: 1,
    image:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=303',
    label: 'Relaxed fit',
    title: 'The Westminster – Long Heritage Trench Coat',
    avaliableColours: 3,
    price: 1700,
  },
  {
    id: 2,
    image:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=303',
    label: 'Classic fit',
    title: 'The Kensington – Mid-Length Heritage Trench Coat',
    avaliableColours: 2,
    price: 1700,
  },
  {
    id: 3,
    image:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=303',
    label: 'Toilered fit',
    title: 'The Sandringham – Mid-length Heritage Trench Coat',
    avaliableColours: 4,
    price: 1700,
  },
  {
    id: 4,
    image:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=303',
    label: 'Relaxed fit',
    title: 'The Chelsea – Short Heritage Trench Coat',
    avaliableColours: 1,
    price: 1700,
  },
];

export default () =>
  (<Recommend>
    <Heading>We recommend</Heading>

    <div className="row">
      {recommendations.map(card =>
        (<div className="col-xs-6 col-md-3" key={card.id}>
          <ProductCard
            id={card.id}
            label={card.label}
            image={card.image}
            title={card.title}
            avaliableColours={card.avaliableColours}
            price={card.price}
          />
        </div>),
      )}
    </div>
  </Recommend>);
