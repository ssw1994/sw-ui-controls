import React, { useEffect, useMemo, useState } from "react";

export class IStep {
  isActive;
  stepLabel;
  isCompleted;
  hasError;
  isDisabled;
  stepNumber;
  element;
  constructor(
    stepLabel,
    stepNumber,
    element,
    isActive,
    isCompleted,
    hasError,
    isDisabled
  ) {
    this.stepLabel = stepLabel;
    this.stepNumber = stepNumber;
    this.element = element;
    this.isActive = isActive;
    this.isCompleted = isCompleted;
    this.hasError = hasError;
    this.isDisabled = isDisabled;
  }
}

export default function useStepper(props) {
  const [steps, updateSteps] = useState([]);
  const [isDynamicStepper, setIsDynamicStepper] = useState(false);
  useEffect(() => {
    const { steps } = props;
    if (steps instanceof Array) {
      if (
        steps.every(
          (item) =>
            typeof item == "string" ||
            typeof item == "number" ||
            typeof item === "object"
        )
      ) {
        setIsDynamicStepper(true);
      }
    }
  }, [props]);

  useEffect(() => {
    const s = [];
    if (isDynamicStepper) {
      const { steps } = props;
      steps.forEach((step, index) => {
        s.push(
          new IStep(step?.stepLabel, index + 1, step?.element, index === 0)
        );
      });
      updateSteps(s);
    } else {
      React.Children.forEach(props.children, (child, index) => {
        const childProps = child.props;
        s.push(
          new IStep(
            childProps.header || childProps.stepLabel,
            index + 1,
            childProps?.children ?? child,
            index === 0
          )
        );
      });
      updateSteps(s);
    }
  }, [props, isDynamicStepper]);

  const nextStep = () => {
    const index = steps.find((step) => step.isActive);
    if (index === steps.length - 1) return;
    updateSteps((steps) => {
      return steps?.map((s, i) => {
        return {
          ...s,
          isActive: i === index + 1,
        };
      });
    });
  };
  const prevStep = () => {
    const index = steps.find((step) => step.isActive);
    if (index === 0) return;
    updateSteps((steps) => {
      return steps?.map((s, i) => {
        return {
          ...s,
          isActive: i === index - 1,
        };
      });
    });
  };

  const isActiveStep = (step) => {
    const s = steps.find(
      (cs) => cs.stepLabel === step || cs.stepLabel === step?.stepLabel
    );
    return s?.isActive;
  };
  const activeStep = useMemo(() => {
    return steps?.find((step) => step.isActive);
  }, [steps]);

  const markAsActiveStep = (step) => {
    updateSteps((steps) => {
      return steps.map((s) => {
        return {
          ...s,
          isActive: step.stepLabel === s.stepLabel ? true : false,
        };
      });
    });
  };
  const markAsCompleteStep = (s) => {
    updateSteps((steps) => {
      return steps.map((step) => {
        return {
          ...step,
          isCompleted:
            s && step.stepLabel === s.stepLabel
              ? true
              : isActiveStep(step)
              ? true
              : false,
        };
      });
    });
  };
  const markAsDisableStep = (s) => {
    updateSteps((steps) => {
      return steps.map((step) => {
        return {
          ...step,
          isDisabled:
            s && step.stepLabel === s.stepLabel
              ? true
              : isActiveStep(step)
              ? true
              : false,
        };
      });
    });
  };

  return {
    ...props,
    steps,
    nextStep,
    prevStep,
    markAsCompleteStep,
    markAsDisableStep,
    markAsActiveStep,
    isActiveStep,
    isDynamicStepper,
    activeStep,
  };
}
