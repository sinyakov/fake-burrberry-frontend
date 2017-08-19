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
            title={card.title}
            avaliableColours={card.avaliableColours}
            price={card.price}
          />
        </div>),
      )}
    </div>
  </Recommend>);
