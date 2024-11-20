import React, { createContext, forwardRef, useContext } from "react";
import StepperStyle from "./Stepper.module.css";
import { Button } from "../Button/Button";
import useStepper from "./Step/useStepper";
export const StepperContext = createContext();

export const Step = (props) => {
  const { markAsActiveStep } = useContext(StepperContext);

  const { hasError, stepNumber, isDisabled, isActive, isCompleted, stepLabel } =
    props;
  let cssClass = StepperStyle.step + " ";
  if (hasError) {
    cssClass += StepperStyle.error;
  }
  if (isDisabled) {
    cssClass += StepperStyle.disabled;
  }

  if (isCompleted) {
    cssClass += StepperStyle.completed;
  }

  if (isActive) {
    cssClass += StepperStyle.active;
  }

  return (
    <div className={cssClass} onClick={() => markAsActiveStep(props)}>
      <div className={StepperStyle.step_number}>{stepNumber}</div>
      <div className={StepperStyle.step_label}>{stepLabel}</div>
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
  const { steps, activeStep } = useContext(StepperContext);

  return (
    <div className={StepperStyle.sw_step_header}>
      {steps?.map((step, index) => (
        <>
          <Step {...step} key={step.stepLabel} />
          {index !== steps.length - 1 && (
            <hr
              className={
                StepperStyle.step_line +
                " " +
                `${
                  activeStep.stepNumber > step.stepNumber
                    ? StepperStyle.before_active_step_line
                    : StepperStyle.after_active_step_line
                }`
              }
            />
          )}
        </>
      ))}
    </div>
  );
};

export const Steps = (props) => {
  const { steps, activeStep, preserve } = useContext(StepperContext);
  return (
    <div className={StepperStyle.sw_stepper}>
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
      <div className={StepperStyle.sw_stepper}>
        <Steps />
      </div>
    </StepperContext.Provider>
  );
};
