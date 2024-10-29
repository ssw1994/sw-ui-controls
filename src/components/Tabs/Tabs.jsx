import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import "./Tabs.scss";
import { Card } from "../Card";
export const TabHeader = (props) => {
  const { steps, setActiveStep } = props;
  return (
    <div className="sw-tab-header">
      {steps.map((step) => {
        return (
          <Button
            key={step.header}
            onClick={() => setActiveStep(step)}
            className={`${step.active ? "active" : "inactive"}`}
            disabled={step?.disabled ?? false}
          >
            {step.header}
          </Button>
        );
      })}
    </div>
  );
};

export const TabContents = (props) => {
  const { steps } = props;
  return (
    <div className="sw-tab-contents">
      {steps.map((step) => {
        return (
          <Card
            key={step.header}
            hidden={!step.active}
            style={{
              padding: "10px 5px",
            }}
          >
            {step.children}
          </Card>
        );
      })}
    </div>
  );
};

export const Tabs = forwardRef((props, ref) => {
  //const [steps, updateSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(null);
  const steps = useMemo(() => {
    let s = [];
    React.Children.forEach(props.children, (child, index) => {
      const { header, children } = child.props;
      s.push({
        ...child.props,
        active: !activeStep ? index === 0 : activeStep.header === header,
      });
    });
    return s;
  }, [props, activeStep]);

  const updateActiveStep = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="sw-tabs">
      <TabHeader steps={steps} setActiveStep={updateActiveStep} />
      <TabContents steps={steps} />
    </div>
  );
});
