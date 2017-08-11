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
  display: inline-block;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;
  border-bottom: solid 1px #171717;

  @media (min-width: 48rem) {
    margin: 0 0 1rem;
  }
`;

export default () => {
  const recommendations = [
    {
      productImg: 'https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=314&wid=236',
      productTitle: 'Emroided Hooded',
      productPrice: '27 000 руб.'
    },
    {
      productImg: 'https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=314&wid=236',
      productTitle: 'Relaxed Fit Stretch Jeans',
      productPrice: '22 500 руб.'
    },
    {
      productImg: 'https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=314&wid=236',
      productTitle: 'Leather and House Check',
      productPrice: '120 000 руб.'
    },
    {
      productImg: 'https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=314&wid=236',
      productTitle: 'Leather Wingtip Check',
      productPrice: '46 000 руб.'
    }
  ];

  return (
    <Recommend>
      <Heading>We recommend</Heading>

      <div className="row">
      {recommendations.map((item, id) =>
        <div className="col-xs-6 col-md-3" key={id}>
          <RecommendProduct
            productImg={item.productImg}
            productTitle={item.productTitle}
            productPrice={item.productPrice}
          />
        </div>
      )}
      </div>
    </Recommend>
  );
}
