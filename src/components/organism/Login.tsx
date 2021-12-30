// import React from "react";
// import { observer } from 'mobx-react';
import React, { FC } from "react";
import Form from "../atoms/Form";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

interface Props {
  // any props that come into the component
}

const fields = [
  {
    id: 1,
    name: "email",
    label: "User Email",
    type: "email",
    rules: "required|email|string|between:5,25",
  },
  {
    id: 2,
    name: "password",
    label: "Password",
    type: "password",
    rules: "required|string|between:5,25",
  },
];

const LogIn: FC<Props> = () => (
  <Form>
    {fields.map((field: any) => (
      <Field key={field.id} label={field.label} error={field.error} />
    ))}
    <Button>Login</Button>
  </Form>
);

// export default observer(LogIn);
export default LogIn;
