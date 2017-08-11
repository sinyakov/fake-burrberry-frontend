import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Info from './Info';
import Colour from './Colour';
import Buttons from './Buttons';

const Divine = styled.hr`
  margin: 0 -0.5rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
  
  @media (min-width: 48rem) {
    border-bottom: none;
  }
`

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
`

export default () => {
  const colourList = [
    {
      name: 'Black',
      hex: '#232122',
      active: false
    },
    {
      name: 'Honey',
      hex: '#cfa880',
      active: true
    },
  ]
  
  return (
    <article className="card">
      <Title>
        Long Cotton Gabardine Car Coat
      </Title>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Slider />
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="card__descr">
            <Info />
            <Colour
              colourList={colourList}
            />
            <Buttons />
          </div>
        </div>
      </div>
      <Divine />
    </article>
  )
}