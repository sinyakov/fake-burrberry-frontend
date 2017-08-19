import React from 'react';
import styled from 'styled-components';
import triangle from '../../img/triangle.svg';

const Detail = styled.div`
  padding: 2rem 0;

  @media (min-width: 48rem) {
    display: ${props => (props.shipping ? 'none' : 'block')};
    padding: 1.5rem 0;
  }

  @media (min-width: 62rem) {
    padding: 0 0 1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: Raleway;
  text-align: left;
  background: inherit;
  border: none;
`;

const Header = styled.h2`
  position: relative;
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.625rem;
    height: 1.25rem;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-position: center right;
    transform: ${props => (props.opened ? 'rotate(-180deg)' : 'none')};
  }

  @media (min-width: 48rem) {
    &::after {
      content: none;
    }
  }
`;

const Description = styled.div`
  margin: 2rem 0 0;
  font-size: 0.875rem;
  line-height: 1.7142857143;
  font-family: Lora;
  color: #171717;

  p {
    margin: 0;
  }

  ul {
    margin: 1.5rem 0 0;
    padding: 0;
    list-style: none;
  }

  @media (min-width: 48rem) {
    margin: 1rem 0 0;
  }
`;

const Divine = styled.hr`
  margin: 0 -0.5rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    border-bottom: none;
  }
`;

export default () =>
  (<div>
    <Detail descr>
      <Button type="button">
        <Header opened>Description</Header>
      </Button>
      <Description>
        <p>A refined car coat crafted in protective cotton gabardine.</p>
        <p>
          Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable
          fabric that protects against wind and rain.
        </p>
        <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
        <p>The piece is finished with a distinctive check undercollar.</p>
        <ul>
          <li>
            Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly
            according to size.
          </li>
          <li>Outer: 100% cotton</li>
          <li>Check lining: 100% cotton</li>
          <li>Sleeve lining: 100% viscose</li>
          <li>Buttons: buffalo horn</li>
          <li>Specialist dry clean</li>
          <li>Made in Europe</li>
          <li>Item 39428531</li>
        </ul>
      </Description>
    </Detail>
    <Divine />
    <Detail shipping>
      <Button type="button">
        <Header>Shipping & Returns</Header>
      </Button>
    </Detail>
    <Divine />
  </div>);
