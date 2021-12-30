import React, { FC } from "react";
// import { observer } from 'mobx-react';
import { Link } from "react-router-dom";

import LogIn from "../../components/organism/Login";
import Logo from "../../components/atoms/Logo";
import Icon from "../../components/atoms/Icon";

interface Props {
  // any props that come into the component
}

const LogInPage: FC<Props> = () => (
  <div className="page">
    <Logo />
    <LogIn />

    <span className="icons">
      <Icon facebook />
      <Icon google />
    </span>

    <span className="footer">
      Don't have account? <br />
      <Link to="/signup">Sign Up</Link>
    </span>
  </div>
);

export default LogInPage;
// export default observer(LogInPage);
