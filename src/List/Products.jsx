import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Wrapper = styled.div`
  margin: 2rem 0 1rem;

  @media (min-width: 48rem) {
    margin: 4rem 0 2rem;
  }
`;

const Header = styled.h2`
  margin: 0 0 1em;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  font-family: Lora;

  @media (min-width: 48rem) {
    margin: 0 0 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const ShowingInfo = styled.h3`
  margin: 2rem 0 1rem;
  font-family: Lora;
  font-size: 1rem;
  line-height: 1.15;
  font-weight: 500;
  text-align: center;

  @media (min-width: 48rem) {
    margin: 3rem 0 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const Button = styled.button`
  display: block;
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

const Products = props =>
  (<Wrapper>
    <Header>
      {props.header}
    </Header>
    <Gallery>
      <div className="row">
        {props.list.map(card =>
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
    </Gallery>
    {props.list.length < 8 &&
      <div>
        <ShowingInfo>Showing 8 of 17</ShowingInfo>
        <Button>View 9 more</Button>
      </div>}
  </Wrapper>);

Products.propTypes = {
  header: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired, // eslint-disable-line
  // передаю массив, пока нет API
};

export default Products;
