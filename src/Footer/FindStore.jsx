import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.33;
  color: #171717;
`;

export default () =>
  (<div>
    <Img src="/media/store.jpg" alt="Store" />
    <Link href="/">Find a store</Link>
  </div>);
