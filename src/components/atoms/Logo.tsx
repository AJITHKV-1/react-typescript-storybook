// import React from 'react';

// const Logo = () => <div className="logo">Burger Time</div>;

// export default Logo;

// import React, { FC } from "react";
import React, { FC } from "react";

interface Props {
  // any props that come into the component
}

const Logo: FC<Props> = () => <div className="logo">Burger Time</div>;

export default Logo;
