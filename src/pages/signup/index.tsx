import React, { FC } from "react";
import { Link } from "react-router-dom";

import SignUp from "../../components/organism/SignUp";
import Logo from "../../components/atoms/Logo";
import Icon from "../../components/atoms/Icon";

interface Props {
  // any props that come into the component
}

const Signup: FC<Props> = () => {
  return (
    <div className="page">
      <Logo />
      <SignUp />

      <span className="icons">
        <Icon facebook />
        <Icon google />
      </span>

      <span className="footer">
        Have an account? <br />
        <Link to="/">Log In</Link>
      </span>
    </div>
  );
};

// export default observer(Signup);
export default Signup;
