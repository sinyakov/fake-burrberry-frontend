import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Products = styled.div`
  margin: 2rem 0;

  @media (min-width: 48rem) {
    margin: 3rem 0 2rem;
  }
`;

const Header = styled.h2`
  margin: 1em 0;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  font-family: Lora;

  @media (min-width: 48rem) {
    margin: 1em 0 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const ShowingInfo = styled.h3`
  margin: 1rem 0 1rem;
  font-family: Lora;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  text-align: center;

  @media (min-width: 48rem) {
    margin: 3em 0 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const Button = styled.button`
  display: block;
  box-sizing: border-box;
  width: 134px;
  margin: 0 auto 5rem;
  padding: 1rem 0;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  font-family: Raleway;
  text-align: center;
  color: #171717;
  background-color: #ffffff;
  border: solid 1px #999999;
  border-radius: 2px;
`;

const Gallery = styled.div``;

export default props =>
  <Products>
    <Header>
      {props.header}
    </Header>
    <Gallery>
      <div className="row">
        {props.list.map((card, index) =>
          <div className="col-xs-6 col-md-3" key={index}>
            <ProductCard
              id={card.id}
              label={card.label}
              title={card.title}
              avaliableColours={card.avaliableColours}
              price={card.price}
            />
          </div>
        )}
      </div>
    </Gallery>
    {props.list.length < 8 &&
      <div>
        <ShowingInfo>Showing 8 of 17</ShowingInfo>
        <Button>View 9 more</Button>
      </div>}
  </Products>;