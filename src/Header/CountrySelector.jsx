import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg';

const CountrySelector = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
  border: none;
  padding: 0;
  font-size: 0.75em;
  line-height: 1rem;
  font-family: Raleway;
  font-weight: 600;
  color: #999999;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 0.5rem;
    width: 0.75rem;
    height: 0.375rem;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export default () => <CountrySelector>Shopping in: Russia (RUB)</CountrySelector>;
