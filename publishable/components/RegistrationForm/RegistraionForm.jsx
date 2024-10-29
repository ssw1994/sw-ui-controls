import { Card } from "../Card";
import { FormControl } from "../Forms/FormControl";
import FormGroup, { FormButton } from "../Forms/FormGroup";
import "../styles.scss";
export const RegistraionForm = ({ onRegister }) => {
  const confirmPassword = ({ password, repassword }) => {
    return password === repassword ? null : [true, "Password Mismatch"];
  };
  return (
    <Card className="sw-registraion-form">
      <FormGroup
        onSubmit={onRegister}
        formvalidator={[confirmPassword]}
        noValidate
      >
        <FormControl
          type="text"
          required
          name="username"
          label="Username / Email"
        />
        <FormControl
          type="password"
          required
          name="password"
          label="Password"
        />
        <FormControl
          type="password"
          required
          name="repassword"
          label="Confirm Password"
        />
        <FormButton>Register</FormButton>
      </FormGroup>
    </Card>
  );
};
