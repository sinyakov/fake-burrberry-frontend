import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0 0 3rem;
  padding: 0;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  font-family: Raleway;
  color: #171717;
  text-align: left;
  text-transform: uppercase;
  background-color: #ffffff;
  border: none;

  @media (min-width: 62rem) {
    position: absolute;
    top: 0.75rem;
    right: 0;
    margin: 0;
    background-color: inherit;
  }
`;

export default () => <Button type="button">Need size help?</Button>;
