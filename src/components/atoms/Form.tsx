// import React from 'react';
// // import { observer } from 'mobx-react';

// const Form = ({ onSubmit = e => e.preventDefault(), children }) => (
//   <form onSubmit={onSubmit} noValidate>
//     {children}
//   </form>
// );

// // export default observer(Form);

import React, { FC } from "react";

interface Props {
  // onSubmit: React.FormEventHandler;
  // any props that come into the component
}

const Form: FC<Props> = ({
  // onSubmit = (e) => e.preventDefault(),
  children,
}) => <form noValidate>{children}</form>;

export default Form;
