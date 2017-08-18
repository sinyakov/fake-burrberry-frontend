import React from 'react';
import styled from 'styled-components';
import Message from './DeliveryMessage';

const Delivery = styled.header`
  display: none;

  @media (min-width: 48rem) {
    display: block;
    margin: 1.5rem 0;
  }

  @media (min-width: 62rem) {
    margin-bottom: 2.5rem;
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

export default () =>
  <Delivery>
    <div className="row middle-lg">
      <div className="col-md-7 col-lg-7">
        <Img
          src="/media/delivery.png"
          srcSet="/media/delivery@2x.png 2x, /media/delivery@3x.png 3x"
          alt="Delivery"
        />
      </div>
      <div className="col-md-5 col-lg-offset-1 col-lg-4">
        <Header>Delivery</Header>
        <Message
          header="Free Next Day Delivery"
          text="Order before 7pm Monday to Thursday for delivery the next day"
        />
        <Message
          header="Collect-in-Store"
          text="Order online today and pick up your items in store as early as tomorrow"
        />
        <Message
          header="Free Returns"
          text="Enjoy free returns on your order"
        />
        <Message
          header="Free Gift Packaging"
          text="Discover our gift packaging, a gold lined box tied with a coloured ribbon"
        />
      </div>
    </div>
  </Delivery>;
