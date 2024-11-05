import { RadioButton, Tab, Tabs } from "../../components";
import {
  Body,
  ExpansionPanel,
  Header,
} from "../../components/ExpansionPanel/ExpansionPanel";

export default function ExpansionPanelGuide(props) {
  return (
    <div>
      <h1>Expansion Panel Guide</h1>
      <Tabs>
        <Tab header="Result">
          <ExpansionPanel>
            <Header>Who is the main actor in movie batman?</Header>
            <Body>
              <RadioButton name="actor" label="1.Heath Ledger"></RadioButton>
              <RadioButton name="actor" label="2.Christian Bell"></RadioButton>
              <RadioButton
                name="actor"
                label="3.Robert Downey Jr."
              ></RadioButton>
              <RadioButton name="actor" label="4.Chris Hemsworth"></RadioButton>
            </Body>
          </ExpansionPanel>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                <ExpansionPanel>
                    <Header>Who is the main actor in movie batman?</Header>
                    <Body>
                    <RadioButton name="actor" label="1.Heath Ledger"></RadioButton>
                    <RadioButton name="actor" label="2.Christian Bell"></RadioButton>
                    <RadioButton
                        name="actor"
                        label="3.Robert Downey Jr."
                    ></RadioButton>
                    <RadioButton name="actor" label="4.Chris Hemsworth"></RadioButton>
                    </Body>
                </ExpansionPanel>
                `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
