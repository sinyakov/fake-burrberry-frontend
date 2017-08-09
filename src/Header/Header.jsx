import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const Header = styled.header`
  font-size: 0;
  text-align: center;
  border-bottom: solid 1px #c6c6c6;
`;

const HeaderLogo = styled.img`
  width: 138px;
  height: 10px;
  margin: 1rem auto;
  object-fit: contain;

  @media (min-width: 48rem) {
    margin: 1.5rem auto;
  }
`;

export default () => (
  <Header>
    <a href="/">
      <HeaderLogo src={logo} alt="BURBERRY" />
    </a>
  </Header>
);