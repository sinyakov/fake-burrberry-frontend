import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Footer = styled.footer`
  padding: 2rem 0;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  background-color: #f3f3f3;

  @media (min-width: 48rem) {
    padding: 2rem 0;
  }

  @media (min-width: 62rem) {
    padding: 4rem 0;
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  line-height: 1.333333333;
  font-family: Raleway;
  color: #999999;
  background: inherit;
  border: 0;
`;

const ButtonCountry = styled(Button)`
  margin: 0 1.5rem 1rem 0;
  
  @media (min-width: 48rem) {
    margin-bottom: 0;
    margin-left: 0;
  }

  @media (min-width: 62rem) {
    margin-top: 1rem;
    margin-right: 3rem;
  }
`;

const ButtonLanguage = styled(Button)`
  margin-bottom: 1.5rem;
  
  @media (min-width: 48rem) {
    margin-bottom: 0;
  }

  @media (min-width: 62rem) {
    margin-top: 1rem;
  }
`;

const Contact = styled.a`
  text-align: center;
  color: #171717;
  text-decoration: none;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const Header = styled.h4`
  margin: 0 0 1rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.1428571429;
  font-family: Lora;
  font-style: italic;
`;

export default () =>
  (<Footer>
    <div className="container">
      <Menu />
      <ButtonCountry type="button">Shipping country: Russian Federation</ButtonCountry>
      <ButtonLanguage type="button">Language: English</ButtonLanguage>
      <Contact href="#">
        <Header>Need help?</Header>
        <Text>Find out more and contact us</Text>
      </Contact>
    </div>
  </Footer>);
