import React from 'react';
import styled from 'styled-components';
import hamburger from '../img/hamburger.svg';

const Menu = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: inherit;
  border: none;
  padding: 0;

  &::after {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 100%;
    background-image: url(${hamburger});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
  }
`;

export default () => <Menu />;
