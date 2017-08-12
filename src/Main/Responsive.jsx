import React from 'react';
import Responsive from 'react-responsive';

export const XS = ({ children }) =>
  <Responsive maxWidth={991}>
    {children}
  </Responsive>;

export const LG = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;
