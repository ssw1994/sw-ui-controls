import React, { createContext, forwardRef, useContext } from "react";
import "./Stepper.scss";
import { Button } from "../Button/Button";
import useStepper from "./Step/useStepper";
export const StepperContext = createContext();

export const Step = (props) => {
  const { markAsActiveStep } = useContext(StepperContext);

  const { hasError, stepNumber, isDisabled, isActive, isCompleted, stepLabel } =
    props;
  let cssClass = "step ";
  if (hasError) {
    cssClass += " error";
  }
  if (isDisabled) {
    cssClass += " disabled";
  }

  if (isCompleted) {
    cssClass += " completed";
  }

  if (isActive) {
    cssClass += " active";
  }

  return (
    <div className={cssClass} onClick={() => markAsActiveStep(props)}>
      <div className="step-number">{stepNumber}</div>
      <div className="step-label">{stepLabel}</div>
    </div>
  );
};

export const NestStepButton = forwardRef((props, ref) => {
  return (
    <Button {...props} ref={ref}>
      {props.children}
    </Button>
  );
});

export const StepHeader = (props) => {
  const { steps } = useContext(StepperContext);

  return (
    <div className="sw-step-header">
      {steps?.map((step, index) => (
        <>
          <Step {...step} key={step.stepLabel} />
          {index !== steps.length - 1 && <hr className="step-line" />}
        </>
      ))}
    </div>
  );
};

export const Steps = (props) => {
  const { steps, activeStep, preserve } = useContext(StepperContext);
  return (
    <div className="sw-stepper">
      <StepHeader steps={steps}></StepHeader>
      {preserve &&
        steps.map(({ element, isActive }) => {
          return <div hidden={!isActive}>{element}</div>;
        })}
      {!preserve && activeStep?.element}
    </div>
  );
};

export const Stepper = (props) => {
  const updatedProps = useStepper(props);

  return (
    <StepperContext.Provider value={updatedProps}>
      <div className="sw-stepper">
        <Steps />
      </div>
    </StepperContext.Provider>
  );
};
