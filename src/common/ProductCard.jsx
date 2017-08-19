import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import like from '../img/like.svg';

const Card = styled.div`
  margin: 0 0 2rem;
  font-size: 0.75rem;
  line-height: 1.1;

  @media (min-width: 48rem) {
    margin: 0 0 2rem;
  }
`;

const Img = styled.img`
  display: flex;
  max-width: 100%;
  margin: 0 0 1rem;
`;

const LikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5rem;
`;

const Like = styled.button`
  content: '';
  width: 0.875rem;
  height: auto;
  padding: 0 0;
  border: none;
  background-color: inherit;
  background-image: url(${like});
  background-repeat: no-repeat;
  background-position: center;
`;

const Label = styled.h4`
  margin: 0;
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

const Link = styled(RouteLink)`
  text-decoration: none;
  color: #171717;
`;

const LinkUnderlined = styled(Link)`
  text-decoration: underline;
`;

const ProductCard = props =>
  (<Card>
    <Link to={`/men/clothing/${props.id}`}>
      <Img src={`/media/list/${props.id}.jpg`} />
    </Link>
    <LikeWrapper>
      <Label>
        {props.label}
      </Label>
      <Like type="button" />
    </LikeWrapper>
    <Link to={`/men/clothing/${props.id}`}>
      <Header>
        {props.title}
      </Header>
    </Link>
    <Avaliable>
      <span>Available in </span>
      <LinkUnderlined to={`/men/clothing/${props.id}`}>
        {props.avaliableColours} colours
      </LinkUnderlined>
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
  title: PropTypes.string.isRequired,
  avaliableColours: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
