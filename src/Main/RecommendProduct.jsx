import React from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem;
  color: #111111;
  text-decoration: none;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  font-family: Lora;
  color: #111111;

  @media (min-width: 62rem) {
    margin-top: 1rem;
    font-size: 0.75rem;
    line-height: 1.66666667;
  }
`;

const Price = styled.h5`
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  color: #999999;

  @media (min-width: 62rem) {
    font-size: 0.75rem;
    line-height: 1.33333333;
  }
`;

export default props =>
  <Link>
    <Img src={props.image} alt={props.title} />
    <Title>
      {props.title}
    </Title>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </Link>;
