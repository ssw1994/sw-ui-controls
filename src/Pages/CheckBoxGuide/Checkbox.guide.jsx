import { useEffect, useState } from "react";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Tab, Tabs } from "../../components/Tabs";

export default function CheckBoxGuide() {
  const [checks, updateChecks] = useState({
    angular: false,
    react: false,
    nodejs: false,
  });

  const updateCheckBoxStatus = (e) => {
    const { name, checked } = e.target;
    updateChecks((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };

  return (
    <div>
      <h1>Checkbox Guide</h1>

      <Tabs>
        <Tab header="Result">
          <CheckBox
            label="Angular"
            name="angular"
            onChange={updateCheckBoxStatus}
            checked={checks.angular}
          />
          <CheckBox
            label="React"
            name="react"
            onChange={updateCheckBoxStatus}
            checked={checks.react}
          />
          <CheckBox
            label="NodeJs"
            name="nodejs"
            onChange={updateCheckBoxStatus}
            checked={checks.nodejs}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
              const [checks, updateChecks] = useState({
                angular: false,
                react: false,
                nodejs: false,
              });

              const updateCheckBoxStatus = (e) => {
              const { name, checked } = e.target;
              updateChecks((prev) => {
                  return {
                    ...prev,
                    [name]: checked,
                  };
                });
              };

              <CheckBox
                label="Angular"
                name="angular"
                onChange={updateCheckBoxStatus}
                checked={checks.angular}
              />
              <CheckBox
                label="React"
                name="react"
                onChange={updateCheckBoxStatus}
                checked={checks.react}
              />
              <CheckBox
                label="NodeJs"
                name="nodejs"
                onChange={updateCheckBoxStatus}
                checked={checks.nodejs}
              />`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
