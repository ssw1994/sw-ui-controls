import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { Step, Stepper } from "../../components/Stepper/Stepper";
import { Tabs, Tab } from "../../components/Tabs";
import CheckBoxGuide from "../CheckBoxGuide/Checkbox.guide";
import InputGuide from "../InputGuide/Input.guide";
export default function StepperGuide() {
  const steps = [
    { stepLabel: "Cart Items", element: <Card>Cart Item</Card> },
    { stepLabel: "Address Info", element: <Card>Address Info</Card> },
    { stepLabel: "Payment Info", element: <Card>Payment Info</Card> },
    { stepLabel: "Review & Confirm", element: <Card>Review & Confirm</Card> },
  ];

  return (
    <div>
      <h1>Stepper Guide</h1>
      <div>
        <Tabs>
          <Tab header="Result">
            <Stepper steps={steps} />
          </Tab>
          <Tab header="Code">
            <pre>
              <code>
                {` const steps = [
                      { stepLabel: "Cart Items", element: <Card>Cart Item</Card> },
                      { stepLabel: "Address Info", element: <Card>Address Info</Card> },
                      { stepLabel: "Payment Info", element: <Card>Payment Info</Card> },
                      { stepLabel: "Review & Confirm", element: <Card>Review & Confirm</Card> },
                    ];
                    
                    <Stepper steps={steps} />
                    `}
              </code>
            </pre>
          </Tab>
        </Tabs>

        <div>
          <Tabs>
            <Tab header="Result">
              <Stepper preserve={true}>
                <Step header="Home">
                  <Button>Custome Component Work</Button>
                </Step>
                <Step header="Careers">
                  <InputGuide />
                </Step>
                <Step header="ContactUs">Contact us Works</Step>
                <CheckBoxGuide header="With Custome Component" />
              </Stepper>
            </Tab>
            <Tab header="Code">
              <pre>
                <code>
                  {` <Stepper preserve={true}>
                <Step header="Home">
                  <Button>Custome Component Work</Button>
                </Step>
                <Step header="Careers">
                  <InputGuide />
                </Step>
                <Step header="ContactUs">Contact us Works</Step>
                <CheckBoxGuide header="With Custome Component" />
              </Stepper>
                    `}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
