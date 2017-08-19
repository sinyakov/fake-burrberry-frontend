import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

const Wrapper = styled.div`background-color: #f3f3f3;`;

const Description = styled.div`
  max-width: 35rem;
  padding: 2rem 0 0.5rem;

  @media (min-width: 48rem) {
    padding: 4rem 0 0.5rem;
  }
`;

const Header = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.5em;
  line-height: 1.35;
  font-family: Lora;
  font-weigh: 500;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.67;

  @media (min-width: 48rem) {
    margin: 0 0 0.5rem;
  }
`;

const Link = styled(RouteLink)`
  text-decoration: none;
  color: #171717;
`;

const LinkUnderlined = styled(Link)`
  text-decoration: underline;
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Description>
        <Header>Men’s Clothing</Header>
        <Text>
          Explore our menswear collection for the season. Sculptural <span>knitwear, </span>
          <LinkUnderlined to="/">sweatshirts</LinkUnderlined>, artist overalls and oversized cabans
          feature alongside our signature trench coat in both heritage and <span>seasonal... </span>
          <LinkUnderlined to="/">More</LinkUnderlined>
        </Text>
      </Description>
    </div>
  </Wrapper>);
