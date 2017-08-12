import React from 'react';
import styled from 'styled-components';
import RecommendProduct from './RecommendProduct';

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
    image:
      'https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=379&wid=284',
    title: 'Emroided Hooded',
    price: 27000,
    currency: 'RUB'
  },
  {
    image:
      'https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=379&wid=284',
    title: 'Relaxed Fit Stretch Jeans',
    price: 22500,
    currency: 'RUB'
  },
  {
    image:
      'https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=379&wid=284',
    title: 'Leather and House Check',
    price: 120000,
    currency: 'RUB'
  },
  {
    image:
      'https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=379&wid=284',
    title: 'Leather Wingtip Check',
    price: 46000,
    currency: 'RUB'
  }
];

export default () =>
  <Recommend>
    <Heading>We recommend</Heading>

    <div className="row">
      {recommendations.map((item, id) =>
        <div className="col-xs-6 col-md-3" key={id}>
          <RecommendProduct
            image={item.image}
            title={item.title}
            price={item.price}
            currency={item.currency}
          />
        </div>
      )}
    </div>
  </Recommend>;
