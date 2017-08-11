import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem;
  color: #111111;
  text-decoration: none;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  font-family: Lora;
  color: #111111;
`;

const Price = styled.h5`
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  color: #999999;
`;

export default class RecommendProduct extends Component {
  render() {
    return (
      <Link>
        <Img
          src={this.props.productImg}
          alt={this.props.productTitle}
        />
        <Title>{this.props.productTitle}</Title>
        <Price>{this.props.productPrice}</Price>
      </Link>
    )
  }
}