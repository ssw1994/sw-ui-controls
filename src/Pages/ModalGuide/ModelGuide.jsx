import React, { useState } from "react";
import { Button, Tab, Tabs } from "../../components";
import { Modal } from "../../components/Modal/Modal";
import InputGuide from "../InputGuide/Input.guide";
export default function ModalGuide() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="sw_modal_guide">
      <h1>Modal Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal open={open} onClose={onClose}>
            <InputGuide />
          </Modal>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
            const [open, setOpen] = useState(false);
            const onClose = () => {
                setOpen(false);
            };

            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={onClose}>
                <InputGuide />
            </Modal>
            `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
