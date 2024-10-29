import { Tab, Tabs } from "../../components";
import { RadioButton } from "../../components/RadioButton/RadioButton";

export default function RadioButtonGuide() {
  return (
    <div>
      <h1>Radio Button Guide</h1>
      <Tabs>
        <Tab header="Results">
          <RadioButton label="online" name="status" />
          <RadioButton label="offline" name="status" />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
              <RadioButton label="online" name="status" />
              <RadioButton label="offline" name="status" />
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
