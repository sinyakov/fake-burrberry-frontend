import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { XSonly, MDminus, MDplus } from '../Responsive';
import CategoryMenu from './CategoryMenu';

import CountrySelector from './CountrySelector';
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

const Link = styled(NavLink)`
  text-decoration: none;
  color: #171717;
`;

export default () =>
  (<div className="container">
    <Wrapper>
      <Header>
        <MDminus>
          <Menu />
        </MDminus>
        <MDplus>
          <CountrySelector />
        </MDplus>
        <Link to="/">
          <Logo src={logo} alt="BURBERRY" />
        </Link>
      </Header>
      <XSonly>
        <CategoryMenu />
      </XSonly>
    </Wrapper>
  </div>);
