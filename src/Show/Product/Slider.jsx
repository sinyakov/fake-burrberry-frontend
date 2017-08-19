import React from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  display: flex;
  margin: 0 -0.5rem;
  overflow-x: scroll;

  @media (min-width: 48rem) {
    margin: 0;
  }
`;

const Slide = styled.img`
  flex: none;

  @media (min-width: 48rem) {
    width: 432px;
    height: 576px;
  }
`;

export default () =>
  (<Slider>
    <Slide
      src="/media/product-1.png"
      srcSet="/media/product-1@2x.png 2x, /media/product-1@3x.png 3x"
      alt="Product Image 1"
    />
    <Slide
      src="/media/product-2.png"
      srcSet="/media/product-2@2x.png 2x, /media/product-2@3x.png 3x"
      alt="Product Image 2"
    />
    <Slide
      src="/media/product-3.png"
      srcSet="/media/product-3@2x.png 2x, /media/product-3@3x.png 3x"
      alt="Product Image 3"
    />
    <Slide
      src="/media/product-4.png"
      srcSet="/media/product-4@2x.png 2x, /media/product-4@3x.png 3x"
      alt="Product Image 4"
    />
  </Slider>);
