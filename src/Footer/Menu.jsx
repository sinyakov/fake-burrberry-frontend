import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LGplus } from '../Responsive';
import FindStore from './FindStore';

const Menu = styled.div`
  display: none;

  @media (min-width: 48rem) {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

const Header = styled.h3`
  @media (min-width: 768px) {
    margin: 0 0 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

const Nav = styled.nav`@media (min-width: 48rem) {margin-bottom: 0.5rem;}`;

const Link = styled(NavLink)`
  @media (min-width: 768px) {
    display: block;
    margin: 0 0 0.75rem;

    font-size: 0.75rem;
    line-height: 1.33333333;
    color: #999999;
    text-decoration: none;
  }

  &:last-child {
    margin: 0;
  }
`;

export default () =>
  (<Menu>
    <div className="row">
      <div className="col-md-3">
        <Header>Customer service</Header>
        <Nav>
          <Link to="/">Contact Us</Link>
          <Link to="/">Payment</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Faqs</Link>
          <Link to="/">Live Chat</Link>
          <Link to="/">The Burberry App</Link>
          <Link to="/">Store Locator</Link>
        </Nav>
      </div>
      <div className="col-md-3">
        <Header>Our company</Header>
        <Nav>
          <Link to="/">Our History</Link>
          <Link to="/">Burberry Group Plc</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Corporate Responsibility</Link>
          <Link to="/">Site Map</Link>
        </Nav>
      </div>
      <div className="col-md-3">
        <Header>Legal & Cookies</Header>
        <Nav>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Accessibility Statement</Link>
          <Link to="/">Japan Only - SCTL indications</Link>
        </Nav>
      </div>
      <LGplus>
        <div className="col-md-3">
          <FindStore />
        </div>
      </LGplus>
    </div>
  </Menu>);
