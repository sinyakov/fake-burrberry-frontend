import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { XSonly, MDminus, MDplus } from '../Responsive';
import CategoryMenu from './CategoryMenu';

import Country from './Country';
import Menu from './Menu';

const Wrapper = styled.div`position: relative;`;

const Header = styled.header`text-align: center;`;

const Logo = styled.img`
  display: flex;
  height: 12px;
  margin: 1.125rem auto;
  object-fit: contain;

  @media (min-width: 48rem) {
    height: 16px;
    margin: 1.5rem auto;
  }

  @media (min-width: 62rem) {
    margin: 2rem auto;
  }
`;

export default () =>
  (<div className="container">
    <Wrapper>
      <Header>
        <MDminus>
          <Menu />
        </MDminus>
        <MDplus>
          <Country />
        </MDplus>
        <a href="/">
          <Logo src={logo} alt="BURBERRY" />
        </a>
      </Header>
      <XSonly>
        <CategoryMenu />
      </XSonly>
    </Wrapper>
  </div>);
