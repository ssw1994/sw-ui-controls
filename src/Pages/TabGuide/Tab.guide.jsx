import { Tabs, Tab } from "../../components/Tabs";

export default function TabGuide() {
  return (
    <div>
      <h1>Tab Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Tabs>
            <Tab header="Result">Result Working</Tab>
            <Tab header="Code">Code Working</Tab>
          </Tabs>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
              <Tabs>
                <Tab header="Result">Result Working</Tab>
                <Tab header="Code">Code Working</Tab>
              </Tabs>
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
