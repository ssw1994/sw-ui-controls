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
          <FormGroup onSubmit={formSubmit} formvalidator={[matchPassword]}>
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
            <FormControl
              type="select"
              label="User type"
              items={[
                { type: "admin", id: 1 },
                { type: "guest", id: 2 },
                { type: "retail", id: 3 },
              ]}
              required={true}
              config={{ displayName: "type", value: "id" }}
              name="userType"
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
                <FormControl
                  type="select"
                  label="User type"
                  items={[
                    { type: "admin", id: 1 },
                    { type: "guest", id: 2 },
                    { type: "retail", id: 3 },
                  ]}
                  required={true}
                  config={{ displayName: "type", value: "id" }}
                  name="userType"
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
