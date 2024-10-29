import { Tab, Tabs } from "../../components";
import { RegistraionForm } from "../../components/RegistrationForm/RegistraionForm";

export default function RegisterFormGuide() {
  const onRegister = (e) => {
    console.log(e);
  };
  return (
    <div className="sw-register-form-guide">
      <h1>Register form guide</h1>
      <Tabs>
        <Tab header="Result">
          <RegistraionForm onRegister={onRegister} />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const onRegister = (e) => {
                    console.log(e);
                };
                <RegistraionForm onRegister={onRegister} />
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
