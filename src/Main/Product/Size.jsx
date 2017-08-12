import React from 'react';
import styled from 'styled-components';
import ButtonSize from './ButtonSize';

const Size = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0 0 1rem;

  @media (min-width: 48rem) {
    margin: 1rem 0;
  }

  @media (min-width: 62rem) {
    padding: 0 0 0.5rem;
    margin: 0;
  }
`;

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1.16666667;
  color: #171717;
`;

const SizeValue = styled.span`font-weight: 700;`;

const Button = styled.button`
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
`;

const Options = styled.div`
  display: flex;
  margin: 1.0625rem 0 1rem;
`;

const Option = styled.button`
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  background-color: inherit;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  font-size: 0.75rem;
  line-height: 1.33;
  &:last-child {
    margin-right: 0;
  }
`;

export default props =>
  <Size>
    <Text>
      Size: <SizeValue>{props.activeSize}</SizeValue>
    </Text>
    <ButtonSize />

    <Options>
      {props.sizeList.map((size, id) =>
        <Option key={id} active={size === props.activeSize} type="button">
          {size}
        </Option>
      )}
    </Options>
  </Size>;
