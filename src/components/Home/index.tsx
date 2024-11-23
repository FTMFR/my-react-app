import { useEffect, useState } from "react";
import Confirm from "./Confirm";
import Exchange from "./Exchange";
import ProcessBar from "../ProcessBar";
import Complete from "./Complete";

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(() => {
    const storedStep = localStorage.getItem("activeStep");
    return storedStep ? Number(storedStep) : 1;
  });

  useEffect(() => {
    localStorage.setItem("activeStep", activeStep.toString());
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const activeStepsArray = Array.from(
    { length: activeStep },
    (_, index) => index + 1
  );

  return (
    <>
      <ProcessBar isActiveBar={activeStepsArray } />
      {activeStep == 1 && <Exchange handleNext={handleNext} />}
      {activeStep === 2 && <Confirm handleNext={handleNext} />}
      {activeStep === 3 && <Complete />}
    </>
  );
};

export default HomePage;
