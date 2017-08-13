import React from 'react';
import styled from 'styled-components';

const More = styled.div`
  margin: 0 0 4rem;
  padding: 1rem 0 0;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const Header = styled.h2`
  display: inline-block;
  margin: 0 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;
`;

const Link = styled.a`
  display: block;
  margin: 0 0 1rem;
  font-size: 0.875rem;
  line-height: 1.2142857143;
  font-family: Lora;
  color: #171717;
  text-decoration: none;
  font-style: italic;
`;

export default () =>
  <More>
    <Header>More for you</Header>

    <Link href="/">Men’s Black Trench Coats</Link>
    <Link href="/">Men’s Short Trench Coats</Link>
    <Link href="/">Men’s Long Trench Coats</Link>
  </More>;
