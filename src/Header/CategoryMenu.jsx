import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  padding: 1rem;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.35;
  letter-spacing: 1.5px;
  color: #999999;
  text-decoration: none;

  &.active {
    padding-bottom: 15px;
    border-bottom: 1px solid #000;
    color: #171717;
  }
`;

export default () =>
  (<Menu>
    <Link to={'/women'}>Women</Link>
    <Link to={'/men'}>Men</Link>
    <Link to={'/children'}>Children</Link>
    <Link to={'/beauty'}>Beauty</Link>
    <Link to={'/experience'}>Experience</Link>
  </Menu>);
