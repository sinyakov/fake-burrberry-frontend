import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

export const XSonly = ({ children }) =>
  (<Responsive minWidth={577}>
    {children}
  </Responsive>);

export const MDminus = ({ children }) =>
  (<Responsive maxWidth={767}>
    {children}
  </Responsive>);

export const MDonly = ({ children }) =>
  (<Responsive minWidth={768} maxWidth={992}>
    {children}
  </Responsive>);

export const MDplus = ({ children }) =>
  (<Responsive minWidth={768}>
    {children}
  </Responsive>);

export const LGminus = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

export const LGplus = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);

XSonly.propTypes = {
  children: PropTypes.element.isRequired,
};

MDminus.propTypes = {
  children: PropTypes.element.isRequired,
};

MDonly.propTypes = {
  children: PropTypes.element.isRequired,
};

MDplus.propTypes = {
  children: PropTypes.element.isRequired,
};

LGminus.propTypes = {
  children: PropTypes.element.isRequired,
};

LGplus.propTypes = {
  children: PropTypes.element.isRequired,
};
