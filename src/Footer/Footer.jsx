import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 2rem 0;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  background-color: #f3f3f3;
  
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;

const FooterBtn = styled.button`
  margin: 0;
  padding: 0;
  line-height: 1.333333333;
  font-family: Raleway;
  color: #999999;
  background: inherit;
  border: 0;
`

const FooterBtnCountry = styled(FooterBtn)`
  margin: 0 1.3125rem 1rem 0;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 0;
  }
`

const FooterBtnLanguage = styled(FooterBtn)`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const FooterContact = styled.a`
  text-align: center;
  color: #171717;
  text-decoration: none;

  @media (min-width: 768px) {
    display: none;
  }
`

const FooterContactHeader = styled.h4`
  margin: 0 0 1rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25;
`

const FooterContactText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.1428571429;
  font-family: Lora;
  font-style: italic;
`


const FooterMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

const FooterMenuHeader = styled.h3`
  @media (min-width: 768px) {
    margin: 0 0 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

const FooterMenuNav = styled.nav`
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const FooterMenuLink = styled.a`
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
  <Footer>
    <div className="container">
      <FooterMenu>
        <div className="row">
          <div className="col-md-3">
            <FooterMenuHeader>
              Customer service
            </FooterMenuHeader>
            <FooterMenuNav>
              <FooterMenuLink href="/">
                Contact Us
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Payment
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Shipping
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Returns
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Faqs
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Live Chat
              </FooterMenuLink>
              <FooterMenuLink href="/">
                The Burberry App
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Store Locator
              </FooterMenuLink>
            </FooterMenuNav>
          </div>
          <div className="col-md-3">
            <FooterMenuHeader className="footer-menu__header">
              Our company
            </FooterMenuHeader>
            <FooterMenuNav>
              <FooterMenuLink href="/">
                Our History
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Burberry Group Plc
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Careers
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Corporate Responsibility
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Site Map
              </FooterMenuLink>
            </FooterMenuNav>
          </div>
          <div className="col-md-3">
            <FooterMenuHeader className="footer-menu__header">
              Legal & Cookies
            </FooterMenuHeader>
            <FooterMenuNav>
              <FooterMenuLink href="/">
                Terms & Conditions
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Privacy Policy
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Cookie Policy
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Accessibility Statement
              </FooterMenuLink>
              <FooterMenuLink href="/">
                Japan Only - SCTL indications
              </FooterMenuLink>
            </FooterMenuNav>
          </div>
        </div>
      </FooterMenu>

      <FooterBtnCountry type="button">
        Shipping country: Russian Federation
      </FooterBtnCountry>

      <FooterBtnLanguage type="button">
        Language: English
      </FooterBtnLanguage>

      <FooterContact href="#">
        <FooterContactHeader>Need help?</FooterContactHeader>
        <FooterContactText>Find out more and contact us</FooterContactText>
      </FooterContact>

    </div>
  </Footer>
);