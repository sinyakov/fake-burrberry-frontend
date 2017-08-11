import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  @media (min-width: 48rem) {
    margin: 0 0 1em;
  }
`

const Price = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #111111;

  @media (min-width: 48rem) {
    margin: 0;
  }
`

const Code = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.6666666667;
  color: #171717;
`


export default () => (
  <Info>
    <Price>
      110 000 руб.
    </Price>
    <Code>
      Item 39428531
    </Code>
  </Info>
)