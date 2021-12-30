// import React from 'react';

// const Input = ({ type = 'text', ...props }) => <input type={type} {...props} />;

// export default Input;

import React, { FC } from "react";

interface Props {
  type: string;
  // value: string;

  // any props that come into the component
}

const Input: FC<Props> = ({ type = "text", ...props }) => (
  <input type={type} {...props} />
);

export default Input;
