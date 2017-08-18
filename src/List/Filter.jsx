import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg';

const Wrapper = styled.div`background-color: #f3f3f3;`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
`;

const DropdownBlock = styled.div`
  display: flex;
  margin: 0 -0.5rem;
`;

const Dropdown = styled.button`
  margin-right: 1rem;
  margin-left: 0.5rem;
  background-color: inherit;
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75em;
  line-height: 1.35;
  font-family: Raleway;
  white-space: nowrap;

  &:last-child {
    margin-right: 0.5rem;
  }

  &::after {
    content: '';
    display: inline-block;
    margin-left: 0.5rem;
    width: 0.75rem;
    height: 0.375rem;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  @media (min-width: 48rem) {
    margin-right: 3.5rem;
  }

  @media (min-width: 62rem) {
    margin-right: 2.5rem;
  }
`;

export default () =>
  <Wrapper>
    <div className="container">
      <Menu>
        <DropdownBlock>
          <Dropdown>Category</Dropdown>
          <Dropdown>Colour</Dropdown>
          <Dropdown>Size</Dropdown>
        </DropdownBlock>
        <DropdownBlock>
          <Dropdown>Sort by price</Dropdown>
        </DropdownBlock>
      </Menu>
    </div>
  </Wrapper>;
