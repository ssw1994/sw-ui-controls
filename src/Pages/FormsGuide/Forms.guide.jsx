import { FormControl } from "../../components/Forms/FormControl";
import FormGroup, { FormButton } from "../../components/Forms/FormGroup";
import { Tabs, Tab } from "../../components/Tabs";

export default function FormsGuide() {
  const formSubmit = (e) => {
    console.log(e);
  };

  const matchPassword = (values) => {
    const { password, rePassword } = values;
    console.log(password, rePassword);
    return password === rePassword ? null : [true, "Password mismatch"];
  };

  return (
    <div>
      <h1>Form Guide</h1>

      <Tabs>
        <Tab header="Result">
          <FormGroup onSubmit={formSubmit} formValidator={[matchPassword]}>
            <FormControl
              type="text"
              label="Username"
              minLength={4}
              required={true}
              name="username"
            ></FormControl>
            <FormControl
              type="password"
              label="Passowrd"
              minLength={8}
              required={true}
              name="password"
            ></FormControl>
            <FormControl
              type="password"
              label="Re Enter Password"
              minLength={8}
              required={true}
              name="rePassword"
            ></FormControl>
            <FormButton>Submit</FormButton>
          </FormGroup>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {` 
                const formSubmit = (e) => {
                  console.log(e);
                };

                const matchPassword = (values) => {
                  const { password, rePassword } = values;
                  console.log(password, rePassword);
                  return password === rePassword ? null : [true, "Password mismatch"];
                };

                <FormGroup onSubmit={formSubmit} formValidator={[matchPassword]}>
                <FormControl
                  type="text"
                  label="Username"
                  minLength={4}
                  required={true}
                  name="username"
                ></FormControl>
                <FormControl
                  type="password"
                  label="Passowrd"
                  minLength={8}
                  required={true}
                  name="password"
                ></FormControl>
                <FormControl
                  type="password"
                  label="Re Enter Password"
                  minLength={8}
                  required={true}
                  name="rePassword"
                ></FormControl>
                <FormButton>Submit</FormButton>
              </FormGroup>`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
