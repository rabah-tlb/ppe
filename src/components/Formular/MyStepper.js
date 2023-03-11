import { Stepper, Step, StepLabel } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../../App";

const steps = ["Property Details", "Personal Informations", "Review and Submit"];

function MyStepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <Stepper activeStep={activeStepIndex} orientation="horizontal">
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default MyStepper;
