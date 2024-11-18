import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Card,
  CardBody,
  Button,
  CardHeader,
  FormGroup,
  FormControl,
  HtmlEditor,
  Chips,
  FormButton,
} from "../../components";
import { Modal } from "../../components/Modal/Modal";
import InputGuide from "../InputGuide/Input.guide";
export default function ModalGuide() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const addProject = (payload) => {
    console.log(payload);
  };
  const contents = (c) => {
    console.log(c);
  };
  return (
    <div className="sw_modal_guide">
      <h1>Modal Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal open={open} onClose={onClose}>
            <Card style={{ boxShadow: "none" }}>
              <CardHeader>Add Project</CardHeader>
              <CardBody>
                <FormGroup onSubmit={addProject}>
                  <FormControl
                    type="text"
                    name="title"
                    label="Title"
                    placeholder="e.g Library Management"
                    required
                  />
                  <div>
                    <label style={{ marginBottom: "15px" }}>Description</label>
                    <HtmlEditor getContents={contents} />
                  </div>
                  <FormControl
                    type="text"
                    name="github_link"
                    label="Github Profile Url"
                    placeholder="e.g https://github.com/johndoe"
                    required
                  />
                  <FormControl
                    type="text"
                    name="live_link"
                    label="Live Link"
                    placeholder="e.g https://tictactoe.com"
                    required
                  />

                  <div>
                    <h3>Technologies</h3>
                    <Chips removable={true} style={{ width: "400px" }} />
                  </div>

                  <FormButton style={{ padding: "10px 20px" }}>Save</FormButton>
                </FormGroup>
              </CardBody>
            </Card>
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
