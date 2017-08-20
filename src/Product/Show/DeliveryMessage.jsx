import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 0 1.5rem;

  &:last-child {
    margin: 0;
  }
`;

const Header = styled.h3`
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  line-height: 1.1666666667;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.333333333;
`;

const Message = props =>
  (<Wrapper>
    <Header>
      {props.header}
    </Header>
    <Text>
      {props.text}
    </Text>
  </Wrapper>);

Message.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
