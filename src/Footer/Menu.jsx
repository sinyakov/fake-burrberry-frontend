import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
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

const Nav = styled.nav`
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled.a`
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


export default () => (
  <Menu>
    <div className="row">
      <div className="col-md-3">
        <Header>
          Customer service
        </Header>
        <Nav>
          <Link href="/">
            Contact Us
          </Link>
          <Link href="/">
            Payment
          </Link>
          <Link href="/">
            Shipping
          </Link>
          <Link href="/">
            Returns
          </Link>
          <Link href="/">
            Faqs
          </Link>
          <Link href="/">
            Live Chat
          </Link>
          <Link href="/">
            The Burberry App
          </Link>
          <Link href="/">
            Store Locator
          </Link>
        </Nav>
      </div>
      <div className="col-md-3">
        <Header className="-menu__header">
          Our company
        </Header>
        <Nav>
          <Link href="/">
            Our History
          </Link>
          <Link href="/">
            Burberry Group Plc
          </Link>
          <Link href="/">
            Careers
          </Link>
          <Link href="/">
            Corporate Responsibility
          </Link>
          <Link href="/">
            Site Map
          </Link>
        </Nav>
      </div>
      <div className="col-md-3">
        <Header className="-menu__header">
          Legal & Cookies
        </Header>
        <Nav>
          <Link href="/">
            Terms & Conditions
          </Link>
          <Link href="/">
            Privacy Policy
          </Link>
          <Link href="/">
            Cookie Policy
          </Link>
          <Link href="/">
            Accessibility Statement
          </Link>
          <Link href="/">
            Japan Only - SCTL indications
          </Link>
        </Nav>
      </div>
    </div>
  </Menu>
);