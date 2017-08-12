import React from 'react';
import styled from 'styled-components';
import Responsive from 'react-responsive';

import Slider from './Slider';
import Info from './Info';
import Colour from './Colour';
import Buttons from './Buttons';
import ButtonSize from './ButtonSize';
import Size from './Size';
import Details from './Details';
import Delivery from './Delivery';
import Gallery from './Gallery';

const Desctop = ({ children }) =>
  <Responsive minWidth={992} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={991} children={children} />;

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

const activeColourName = 'Honey';
const colourList = [
  {
    name: 'Black',
    hex: '#232122'
  },
  {
    name: 'Honey',
    hex: '#cfa880'
  }
];

const activeSize = 'XL';
const sizeList = ['S', 'M', 'L', 'XL'];

export default () =>
  <div>
    <Card>
      <div className="container">
        <Mobile>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </Mobile>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Mobile>
              <Slider />
            </Mobile>
            <Desctop>
              <ImgProduct
                src="../media/product-1.png"
                srcSet="media/product-1@2x.png 2x, media/product-1@3x.png 3x"
                alt="Product Image 1"
              />
            </Desctop>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Desctop>
              <Title>
                Long Cotton Gabardine Car Coat Long Cotton Gabardine Car Coat
              </Title>
            </Desctop>
            <Info />
            <Columns>
              <Colour
                colourList={colourList}
                activeColourName={activeColourName}
              />
              <Desctop>
                <Size sizeList={sizeList} activeSize={activeSize} />
              </Desctop>
            </Columns>
            <Buttons />
            <Mobile>
              <ButtonSize />
            </Mobile>
            <Desctop>
              <Delivery />
            </Desctop>
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
        <Desctop>
          <div className="col-lg-8">
            <ImgDetail
              src="../media/product-2.png"
              srcSet="media/product-2@2x.png 2x, media/product-2@3x.png 3x"
              alt="Product Image 2"
            />
          </div>
        </Desctop>
      </div>
      <Desctop>
        <Gallery />
      </Desctop>
    </div>
  </div>;
