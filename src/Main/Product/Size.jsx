import React from 'react';
import styled from 'styled-components';
import HelpButton from './HelpButton';

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
      <span>Size: </span>
      <SizeValue>
        {props.sizes[props.activeSizeIndex]}
      </SizeValue>
    </Text>
    <HelpButton />

    <Options>
      {props.sizes.map((size, index) =>
        <Option
          key={index}
          active={index === props.activeSizeIndex}
          type="button"
        >
          {size}
        </Option>
      )}
    </Options>
  </Size>;
