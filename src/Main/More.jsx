import React from 'react';
import styled from 'styled-components';

const More = styled.div`
  margin: 0 0 4rem;
  padding: 1rem 0 0;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const MoreHeading = styled.h2`
  display: inline-block;
  margin: 0 0 1.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;
  border-bottom: solid 1px #171717;
`;

const MoreList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0;
`;

const MoreItem = styled.li`
  margin: 0 0 1rem;
`;

const MoreLink = styled.a`
  font-size: 0.875rem;
  line-height: 1.2142857143;
  font-family: Lora;
  color: #171717;
  text-decoration: none;
  font-style: italic;
`;

export default () => (
  <More>
    <MoreHeading>
      More for you
    </MoreHeading>

    <MoreList>
      <MoreItem>
        <MoreLink href="/">Men’s Black Trench Coats</MoreLink>
      </MoreItem>
      <MoreItem>
        <MoreLink href="/">Men’s Short Trench Coats</MoreLink>
      </MoreItem>
      <MoreItem>
        <MoreLink href="/">Men’s Long Trench Coats</MoreLink>
      </MoreItem>
    </MoreList>
  </More>
)