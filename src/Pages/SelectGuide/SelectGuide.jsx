import { useState } from "react";
import { Button, Select } from "../../components";
import { Tab, Tabs } from "../../components/Tabs";

export default function SelectGuide() {
  const items = ["ReactJs", "Angular", "Java", "Python"];
  const items_1 = [
    { char: "A", ascii: 1 },
    { char: "B", ascii: 2 },
    { char: "C", ascii: 3 },
    { char: "D", ascii: 4 },
  ];
  const [lang, setLang] = useState("Java");
  const [ascii, updateAscii] = useState(3);
  const [fruit, setFruit] = useState("");
  const printValue = () => {
    console.log(lang, ascii, fruit);
  };
  return (
    <div className="sw_select_guide">
      <h1>Select Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Select
            items={items}
            label="Char Selector"
            required
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          />
          <Select
            required
            label="Ascii Selector"
            value={ascii}
            onChange={(e) => updateAscii(e.target.value)}
            items={items_1}
            config={{ displayName: "char", value: "ascii" }}
          />

          <Select
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
            required
          >
            <option value="mango">Mango</option>
            <option value="peer">Peer</option>
          </Select>
          <Button onClick={() => printValue()}>Print Value</Button>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                        const items = ["ReactJs", "Angular", "Java", "Python"];
                        const items_1 = [
                            { char: "A", ascii: 1 },
                            { char: "B", ascii: 2 },
                            { char: "C", ascii: 3 },
                            { char: "D", ascii: 4 },
                        ];
                        const [lang, setLang] = useState("Java");
                        const [ascii, updateAscii] = useState(3);
                        const [fruit, setFruit] = useState("");

                        const printValue = () => {
                            console.log(lang, ascii, setFruit);
                        };

                        <Select
                            items={items}
                            label="Char Selector"
                            required
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                        />
                        <Select
                            required
                            label="Ascii Selector"
                            value={ascii}
                            onChange={(e) => updateAscii(e.target.value)}
                            items={items_1}
                            config={{ displayName: "char", value: "ascii" }}
                        />

                        <Select
                            value={fruit}
                            onChange={(e) => setFruit(e.target.value)}
                            required
                        >
                            <option value="mango">Mango</option>
                            <option value="peer">Peer</option>
                        </Select>
                        <Button onClick={()=>printValue()}>Print Value</Button>
                        `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
