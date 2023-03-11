import React, { useContext } from "react";
import { FormContext } from "../../App";
import PersonalInformations from "./PersonalInformations";
import PropertyDetails from "./PropertyDetails";
import ReviewInformations from "./ReviewInformations";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <PropertyDetails />;
      break;
    case 1:
      stepContent = <PersonalInformations />;
      break;
    case 2:
      stepContent = <ReviewInformations />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
