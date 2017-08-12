import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin: 0 0 1.5rem;

  &:last-child {
    margin: 0;
  }
`;

const Header = styled.h3`
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  line-height: 1.1666666667;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.333333333;
`;

export default () =>
  <Message>
    <Header>Free Next Day Delivery</Header>
    <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
  </Message>;