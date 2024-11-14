import { createRef, useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Tab, Tabs } from "../../components/Tabs";

export default function InputGuide() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const ref = createRef();
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);
  const handleSubmit = (e) => {
    e?.preventDefault();
  };

  useEffect(() => {
    console.log("Updated name ---->", name);
  }, [name]);

  return (
    <div>
      <h1>Input Guide</h1>
      <Tabs>
        <Tab header="Result">
          <form onSubmit={handleSubmit}>
            <Input
              value={name}
              label="Name"
              onChange={(e) => setName(e.target.value)}
              pattern="[a-z]+"
              required
              min={4}
              max={10}
              minLength={5}
              maxLength={10}
              type="text"
            />
            <Input
              value={description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              pattern="[a-z]+"
              required
              rows={5}
              cols={25}
              type="textarea"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`<form onSubmit={handleSubmit}>
        <Input
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
          ref={ref}
          pattern="[a-z]+"
          required
          min={4}
          max={10}
          minLength={5}
          maxLength={10}
          type="password"

        />
        <Button type="submit">Submit</Button>
      </form>`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
