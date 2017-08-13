import React from 'react';
import styled from 'styled-components';
import { XS, LG } from '../Responsive';

const Buttons = styled.div`
  @media (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
    margin: 0 0 1.5rem;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  margin: 2rem 0 1rem;
  padding: 1rem 0;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  font-family: Raleway;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #171717;
  border: solid 1px #171717;
  border-radius: 2px;

  @media (min-width: 48rem) {
    margin: 1rem 0 0;
  }

  @media (min-width: 62rem) {
    margin: 0;

    &:first-child {
      margin-right: 1rem;
    }
  }

  ${props =>
    props.primary &&
    `
    margin: 0 0 1.375rem;
    color: #171717;
    background-color: #ffffff;
    border: solid 1px #999999;

    @media (min-width: 48rem) {
      margin: 1rem 0 1.375rem;
    }

    @media (min-width: 62rem) {
      margin: 0;
      background-color: inherit;
      border: solid 1px #171717;
    }
  `};
`;

export default () =>
  <Buttons>
    <XS>
      <Button type="button">Select a size</Button>
    </XS>
    <LG>
      <Button type="button">Add to bag</Button>
    </LG>
    <Button primary type="button">
      Find in store
    </Button>
  </Buttons>;
