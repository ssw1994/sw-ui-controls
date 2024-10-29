import { Button } from "../../components/Button/Button";
import { Tabs, Tab } from "../../components/Tabs";

export default function ButtonGuide() {
  return (
    <div className="sw-button-guide">
      <h1>Button Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Button style={{ color: "green", fontWeight: "bolder" }}>
            <i className="fa-solid fa-trash"></i>
            Save
          </Button>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                <Button style={{ color: "green", fontWeight: "bolder" }}>
                   <i className="fa-solid fa-trash"></i>
                     Save
            </Button>`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
