import React from 'react';
import styled from 'styled-components';

const Delivery = styled.header`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Header = styled.h2`
  margin: 0 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  color: #171717;
  text-transform: uppercase;
`;

const Message = styled.div`
  margin: 0 0 1.5rem;
  
  &:last-child {
    margin: 0;
  }
`;

const MessageHeader = styled.h3`
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  line-height: 1.1666666667;
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.333333333;
`;


export default () => (
  <Delivery>
      <div className="row">
        <div className="col-md-7">
          <Img src="../media/delivery.png" srcSet="media/delivery@2x.png 2x, media/delivery@3x.png 3x" alt="Delivery" />
        </div>
        <div className="col-md-5">
          <Header>
            Delivery
          </Header>
          <Message>
            <MessageHeader>Free Next Day Delivery</MessageHeader>
            <MessageText>Order before 7pm Monday to Thursday for delivery the next day</MessageText>
          </Message>
          <Message>
            <MessageHeader>Collect-in-Store</MessageHeader>
            <MessageText>Order online today and pick up your items in store as early as tomorrow</MessageText>
          </Message>
          <Message>
            <MessageHeader>Free Returns</MessageHeader>
            <MessageText>Enjoy free returns on your order</MessageText>
          </Message>
          <Message>
            <MessageHeader>Free Gift Packaging</MessageHeader>
            <MessageText>Discover our gift packaging, a gold lined box tied with a coloured ribbon</MessageText>
          </Message>
        </div>
      </div>
    </Delivery>
)