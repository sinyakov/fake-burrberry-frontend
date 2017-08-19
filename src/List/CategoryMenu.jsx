import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

const Category = styled.a`
  padding: 1rem;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.35;
  letter-spacing: 1.5px;
  color: #999999;
  text-decoration: none;

  ${props =>
    props.active &&
    `
    padding-bottom: 15px;
    border-bottom: 1px solid #000;
    color: #171717;    
    `};
`;

export default () =>
  (<Menu>
    <Category href="/">Women</Category>
    <Category active>Men</Category>
    <Category href="/">Children</Category>
    <Category href="/">Beauty</Category>
    <Category href="/">Experience</Category>
  </Menu>);
