import { useEffect, useState } from "react";
import { Tab, Tabs } from "../../components";
import { Counter } from "../../components/Counter/Counter";

export default function CounterGuide() {
  const [counter, updateCounter] = useState(1);

  const countChange = (count) => {
    updateCounter(count);
  };

  useEffect(() => {
    console.log("Counter changed ---->", counter);
  }, [counter]);

  return (
    <div>
      <h1>Counter Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Counter
            value={counter}
            onCountChange={countChange}
            min={1}
            max={5}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const [counter, updateCounter] = useState(1);

                const countChange = (count) => {
                    updateCounter(count);
                };
                
                <Counter
                    value={counter}
                    onCountChange={countChange}
                    min={1}
                    max={5}
                 />
             `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
