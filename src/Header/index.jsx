import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const Header = styled.header`
  font-size: 0;
  text-align: center;
  border-bottom: solid 1px #c6c6c6;

  @media (min-width: 62rem) {
    border-bottom: none;
  }
`;

const Logo = styled.img`
  height: 10px;
  margin: 1rem auto;
  object-fit: contain;

  @media (min-width: 48rem) {
    margin: 1.5rem auto;
  }

  @media (min-width: 62rem) {
    height: 16px;
    margin: 2rem auto;
  }
`;

export default () =>
  <Header>
    <a href="/">
      <Logo src={logo} alt="BURBERRY" />
    </a>
  </Header>;
