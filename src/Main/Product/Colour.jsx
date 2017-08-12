import React from 'react';
import styled from 'styled-components';

const Colour = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0 1rem;
  border-bottom: solid 1px #c6c6c6;

  @media (min-width: 48rem) {
    margin: 1rem 0;
  }

  @media (min-width: 62rem) {
    padding: 0 0 0.5rem;
    margin: 0;
    margin-right: 1rem;
    border-bottom: none;
  }
`;

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1.16666667;
  color: #171717;
`;

const ColourValue = styled.span`font-weight: 700;`;

const Options = styled.div`
  display: flex;
  margin: 1.0625rem 0 1rem;
`;

const Option = styled.button`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  font-size: 0;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  border-radius: 50%;
  &:last-child {
    margin-right: 0;
  }
`;

export default props =>
  <Colour>
    <Text>
      Colour: <ColourValue>{props.colours[props.activeColourName]}</ColourValue>
    </Text>
    <Options>
      {props.colours.map((item, id) =>
        <Option
          key={id}
          style={{ background: item.hex }}
          active={id === props.activeColourId}
          type="button"
        >
          {item.name}
        </Option>
      )}
    </Options>
  </Colour>;
