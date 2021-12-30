// import React from 'react';

// const Button = ({ children, ...props }) => (
//   <button {...props}>{children}</button>
// );

import React, { FC } from "react";

interface Props {
  // any props that come into the component
}

const Button: FC<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
