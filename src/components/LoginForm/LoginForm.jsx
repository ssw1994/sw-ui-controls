import { Card } from "../Card";
import { FormControl } from "../Forms/FormControl";
import FormGroup, { FormButton } from "../Forms/FormGroup";
import React from "react";
export const LoginForm = ({ onLogin }) => {
  return (
    <Card className="sw_login_form">
      <FormGroup onSubmit={onLogin} noValidate>
        <FormControl
          type="text"
          required={true}
          name="username"
          label="Username"
          minLength={3}
          pattern="[a-z]+"
        />
        <FormControl
          type="password"
          required
          name="password"
          label="Password"
        />
        <FormButton>Login</FormButton>
      </FormGroup>
    </Card>
  );
};
