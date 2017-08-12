import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  div:nth-child(1) {
    margin-top: 2rem;
  }

  div:nth-child(2) {
    margin-top: 6rem;
  }
`;

const Img = styled.img`
  display: flex;
  width: 100%;
`;

export default () =>
  <Gallery className="row">
    <div className="col-lg-4">
      <Img
        src="../media/product-2.png"
        srcSet="media/product-2@2x.png 2x, media/product-2@3x.png 3x"
        alt="Product Image 2"
      />
    </div>
    <div className="col-lg-4">
      <Img
        src="../media/product-3.png"
        srcSet="media/product-3@2x.png 2x, media/product-3@3x.png 3x"
        alt="Product Image 3"
      />
    </div>
    <div className="col-lg-4">
      <Img
        src="../media/product-4.png"
        srcSet="media/product-4@2x.png 2x, media/product-4@3x.png 3x"
        alt="Product Image 4"
      />
    </div>
  </Gallery>;
