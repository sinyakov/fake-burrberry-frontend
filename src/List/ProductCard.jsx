import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Card = styled.div`
  margin: 0 0 2rem;
  font-size: 0.75rem;
  line-height: 1.1;

  @media (min-width: 48rem) {
    margin: 0 0 2rem;
  }

  @media (min-width: 62rem) {
  }
`;

const Img = styled.img`
  display: flex;
  max-width: 100%;
  margin: 0 0 1rem;
`;

const Label = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 400;
`;

const Header = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  line-height: 1.4;
  font-weight: 600;

  @media (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.45;
  }

  @media (min-width: 62rem) {
    font-size: 1rem;
    line-height: 1.25;
  }
`;

const Avaliable = styled.p`
  margin: 0 0 0.25rem;
  line-height: 1.55;
`;

const Price = styled.p`
  margin: 0;
  line-height: 1.35;
`;

const Link = styled.a`color: #171717;`;

const ProductCard = props =>
  (<Card>
    <a>
      <Img src={`media/list/${props.id}.jpg`} />
    </a>

    <Label>
      {props.label}
    </Label>
    <a>
      <Header>
        {props.title}
      </Header>
    </a>
    <Avaliable>
      Available in <Link href="/">{props.avaliableColours} colours</Link>
    </Avaliable>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency" // eslint-disable-line
        currency="RUB"
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </Card>);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
  avaliableColours: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
