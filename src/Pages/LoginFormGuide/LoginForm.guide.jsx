import { Tab, Tabs } from "../../components";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export default function LoginFormGuide() {
  const onLogin = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Login form guide</h1>
      <Tabs>
        <Tab header="Result">
          <LoginForm onLogin={onLogin} />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const onLogin = (e) => {
                    console.log(e);
                };
                <LoginForm onLogin={onLogin} />
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
