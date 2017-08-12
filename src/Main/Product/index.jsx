import React from 'react';
import styled from 'styled-components';

import { XS, LG } from '../Responsive';
import Slider from './Slider';
import Info from './Info';
import Colour from './Colour';
import Buttons from './Buttons';
import HelpButton from './HelpButton';
import Size from './Size';
import Details from './Details';
import Delivery from './Delivery';
import Gallery from './Gallery';

const Card = styled.div`
  @media (min-width: 62rem) {
    margin-bottom: 4rem;
    background-color: #d4bdad;
  }
`;

const Title = styled.h1`
  margin: 1rem 0;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-family: Lora;
  color: #111111;

  @media (min-width: 48rem) {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  @media (min-width: 62rem) {
    margin: 0 0 0.5rem;
  }
`;

const ImgProduct = styled.img`
  display: flex;
  width: 488px;
  height: 651px;
  margin: 0 -0.5rem;
`;

const ImgDetail = styled.img`
  display: flex;
  width: 100%;
`;

const Columns = styled.div`
  @media (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
`;

const Divine = styled.hr`
  margin: 0 -0.5rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;

  @media (min-width: 48rem) {
    border-bottom: none;
  }
`;

const activeColourIndex = 1;
const colours = [
  {
    name: 'Black',
    hex: '#232122'
  },
  {
    name: 'Honey',
    hex: '#cfa880'
  }
];

const activeSizeIndex = 3;
const sizes = ['S', 'M', 'L', 'XL'];

export default () =>
  <div>
    <Card>
      <div className="container">
        <XS>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </XS>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <XS>
              <Slider />
            </XS>
            <LG>
              <ImgProduct
                src="../media/product-1.png"
                srcSet="media/product-1@2x.png 2x, media/product-1@3x.png 3x"
                alt="Product Image 1"
              />
            </LG>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <LG>
              <Title>
                Long Cotton Gabardine Car Coat Long Cotton Gabardine Car Coat
              </Title>
            </LG>
            <Info />
            <Columns>
              <Colour colours={colours} activeColourIndex={activeColourIndex} />
              <LG>
                <Size sizes={sizes} activeSizeIndex={activeSizeIndex} />
              </LG>
            </Columns>
            <Buttons />
            <XS>
              <HelpButton />
            </XS>
            <LG>
              <Delivery />
            </LG>
          </div>
        </div>
        <Divine />
      </div>
    </Card>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <Details />
        </div>
        <LG>
          <div className="col-lg-8">
            <ImgDetail
              src="../media/product-2.png"
              srcSet="media/product-2@2x.png 2x, media/product-2@3x.png 3x"
              alt="Product Image 2"
            />
          </div>
        </LG>
      </div>
      <LG>
        <Gallery />
      </LG>
    </div>
  </div>;
