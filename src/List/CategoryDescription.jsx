import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`background-color: #f3f3f3;`;

const Description = styled.div`
  max-width: 35rem;
  padding: 2rem 0 0.5rem;
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
  opacity: 0.87;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.67;
`;

export default () =>
  <Wrapper>
    <div className="container">
      <Description>
        <Header>Men’s Clothing</Header>
        <Text>
          Explore our menswear collection for the season. Sculptural knitwear,{' '}
          <a href="/">sweatshirts</a>, artist overalls and oversized cabans
          feature alongside our signature trench coat in both heritage and
          seasonal... <a href="/">More</a>
        </Text>
      </Description>
    </div>
  </Wrapper>;
