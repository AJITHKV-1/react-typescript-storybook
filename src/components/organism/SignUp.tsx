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
    name: "name",
    label: "Full Name",
    type: "text",
    rules: "required|string",
  },
  {
    id: 2,
    name: "email",
    label: "User Email",
    type: "email",
    rules: "required|email|string|between:5,25",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    type: "password",
    rules: "required|string|between:5,25",
  },
  {
    id: 4,
    name: "confirm-password",
    label: "Confirm Password",
    type: "password",
    rules: "required|string|same:password",
  },
];

// const SignUp = ({ form, onSubmit }) => (
//   <Form onSubmit={onSubmit}>
//     {form.map((field) => (
//       <Field
//         key={field.id}
//         label={field.label}
//         error={field.error}
//         {...field.bind()}
//       />
//     ))}

//     <Button>Sign Up</Button>
//   </Form>
// );

// export default SignUp;

const SignUp: FC<Props> = () => (
  <Form>
    {fields.map((field: any) => (
      <Field key={field.id} label={field.label} error={field.error} />
    ))}

    <Button>Sign Up</Button>
  </Form>
);

// export default observer(LogIn);
export default SignUp;

// export default observer(SignUp);
