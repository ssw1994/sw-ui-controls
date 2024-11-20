import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Tab, Tabs } from "../../components/Tabs";

export default function DropdownGuide() {
  const list = ["IE", "Firefox", "Chrome", "Opera", "Safari"];
  return (
    <div className="sw_dropdown_guide">
      <h1>Dropdown Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Dropdown
            list={list}
            label="Select browser"
            placeholder="e.g Firefox"
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>{``}</code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
