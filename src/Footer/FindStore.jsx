import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Link = styled(NavLink)`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.33;
  color: #171717;
`;

export default () =>
  (<div>
    <Img src={`${process.env.PUBLIC_URL}/media/store.jpg`} alt="Store" />
    <Link to="/">Find a store</Link>
  </div>);
