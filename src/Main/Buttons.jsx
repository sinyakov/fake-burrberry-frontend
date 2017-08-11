import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  margin: 2rem 0 1rem;
  padding: 1rem 0;
  font-size: 0.75rem;
  line-height: 1.1666666667;
  font-family: Raleway;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #171717;
  border: solid 1px #171717;
  border-radius: 2px;

  @media (min-width: 768px) {
    margin: 1rem 0 0;
  }

  ${props => props.black &&`
    margin: 0 0 1.375rem;
    color: #171717;
    background-color: #ffffff;
    border: solid 1px #999999;

    @media (min-width: 768px) {
      margin: 1rem 0 1.375rem;
    }
  `}

  ${props => props.mini &&`
    margin: 0 0 3rem;
    padding: 0;
    font-size: 0.75rem;
    line-height: 1.3333333333;
    font-family: Raleway;
    color: #171717;
    text-align: left;    
    text-transform: uppercase;
    background-color: #ffffff;
    border: none;
  `}  
`;

export default () => (
  <div>
    <Button type="button">
      Select a size
    </Button>

    <Button black type="button">
      Find in store
    </Button>

    <Button mini type="button">
      Need size help?
    </Button>
  </div>
)