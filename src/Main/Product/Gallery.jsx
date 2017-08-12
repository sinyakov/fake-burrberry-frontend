import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`margin: 4rem 0;`;

const Img = styled.img`
  display: flex;
  width: 100%;
  ${props =>
    props.first &&
    `
    margin-top: 2rem;
  `};
  ${props =>
    props.second &&
    `
    margin-top: 6rem;
  `};
`;

export default () =>
  <Gallery>
    <div className="row">
      <div className="col-lg-4">
        <Img
          first
          src="../media/product-2.png"
          srcSet="media/product-2@2x.png 2x, media/product-2@3x.png 3x"
          alt="Product Image 2"
        />
      </div>
      <div className="col-lg-4">
        <Img
          second
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
    </div>
  </Gallery>;
