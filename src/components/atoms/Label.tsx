// import React from 'react';

// const Label = ({ children, ...props }) => <label {...props}>{children}</label>;

// export default Label;

import React, { FC } from "react";

interface Props {
  // any props that come into the component
}

const Label: FC<Props> = ({ children, ...props }) => (
  <label {...props}>{children}</label>
);

export default Label;
