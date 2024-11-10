import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Tabs, Tab } from "../../components/Tabs";

export default function ButtonGuide() {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isSaving) {
      setTimeout(() => {
        setIsSaving(false);
      }, [2000]);
    }
  }, [isSaving]);

  return (
    <div className="sw-button-guide">
      <h1>Button Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Button
            style={{ color: "green", fontWeight: "bolder" }}
            onClick={() => setIsSaving(true)}
            isLoading={isSaving}
          >
            {isSaving ? "Saving" : "Save"}
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
