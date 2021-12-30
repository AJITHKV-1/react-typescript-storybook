// import React from 'react';
// import cn from 'classnames';

// const Icon = ({ facebook, google }) => (
//   <div
//     className={cn('icon', {
//       'icon-facebook': !!facebook,
//       'icon-google': !!google,
//     })}
//   />
// );

// export default Icon;

import React, { FC } from "react";
import cn from "classnames";

interface Props {
  facebook?: any;
  google?: any;
  // any props that come into the component
}

const Icon: FC<Props> = ({ facebook, google }) => (
  <div
    className={cn("icon", {
      "icon-facebook": !!facebook,
      "icon-google": !!google,
    })}
  />
);

export default Icon;
