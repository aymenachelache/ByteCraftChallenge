import { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import useMultiStepForm from "./useMultiStepForm";
import PersonalInfo from "./Form/PersonalInfo";
import SelectYourPlan from "./Form/SelectYourPlan";
import AddOns from "./Form/AddOns";
import FinishingUp from "./Form/FinishingUp";
import ThankYou from "./Form/ThankYou";

type FormData = {
  name: string,
  email: string,
  phoneNumber: string
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phoneNumber: ""
}
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [nameIsRequired, setNameIsRequired] = useState(false);
  const [emailIsRequired, setEmailIsRequired] = useState(false);
  const [phoneIsRequired, setPhoneIsRequired] = useState(false);
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {return {...prev, ...fields}})
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  const {steps, currentStepIndex, isFirstStep, isLastStep, back, next} = useMultiStepForm([<PersonalInfo {...data} updateFields={updateFields} nameIsRequired={nameIsRequired} emailIsRequired={emailIsRequired} phoneIsRequired={phoneIsRequired}/>, <SelectYourPlan />, <AddOns />, <FinishingUp />,<ThankYou />]);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data.name.length)
    if(data.name.length===0) {
      setNameIsRequired(true);
    } else {
      setNameIsRequired(false);
    }
    if(data.email.length===0) {
      setEmailIsRequired(true);
    } else {
      setEmailIsRequired(false);
    }
    if(data.phoneNumber.length===0) {
      setPhoneIsRequired(true);
    } else {
      setPhoneIsRequired(false);
    }
    if(data.name.length!==0 && data.email.length!==0 && data.phoneNumber.length!==0) {
      next();
    }

    
  }
  return (
    <div className="body bg-Neutral-LightGray min-h-screen flex justify-center items-center">
      <div className="box min-h-[470px] grid grid-cols-3 max-md:grid-cols-1 bg-white p-4 rounded-lg">
        <div className="left p-5 col-span-1">
          <ol className="items-center max-md:flex max-md:justify-center w-full max-md:space-y-0 space-y-4 pt-4">
            <li className="flex items-center text-Neutral-CoolGray space-x-2.5 rtl:space-x-reverse">
              <span className="flex text-white items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-white" style={currentStepIndex ===0 ? {color: "#000", backgroundColor: "hsl(229, 24%, 87%)"} : {}}>
                1
              </span>
              <span>
                <h3 className="font-medium leading-tight uppercase text-xs max-md:hidden">Step 1</h3>
                <p className="text-sm text-white font-semibold max-md:hidden">Your Info</p>
              </span>
            </li>
            <li className="flex items-center text-Neutral-CoolGray space-x-2.5 rtl:space-x-reverse">
              <span className="flex text-white items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-white" style={currentStepIndex ===1 ? {color: "#000", backgroundColor: "hsl(229, 24%, 87%)"} : {}}>
                2
              </span>
              <span>
                <h3 className="font-medium leading-tight uppercase text-xs max-md:hidden">Step 2</h3>
                <p className="text-sm text-white font-semibold max-md:hidden">Select Plan</p>
              </span>
            </li>
            <li className="flex items-center text-Neutral-CoolGray space-x-2.5 rtl:space-x-reverse">
              <span className="flex text-white items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-white" style={currentStepIndex ===2 ? {color: "#000", backgroundColor: "hsl(229, 24%, 87%)"} : {}}>
                3
              </span>
              <span>
                <h3 className="font-medium leading-tight uppercase text-xs max-md:hidden">Step 3</h3>
                <p className="text-sm text-white font-semibold max-md:hidden">ADD-ONS</p>
              </span>
            </li>
            <li className="flex items-center text-Neutral-CoolGray space-x-2.5 rtl:space-x-reverse">
              <span className="flex text-white items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-white" style={currentStepIndex ===3 ? {color: "#000", backgroundColor: "hsl(229, 24%, 87%)"} : {}}>
                4
              </span>
              <span>
                <h3 className="font-medium leading-tight uppercase text-xs max-md:hidden">Step 4</h3>
                <p className="text-sm text-white font-semibold max-md:hidden">Summary</p>
              </span>
            </li>
          </ol>
        </div>
        <div className="right col-span-2 bg-white px-10 py-6">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div className="h-full">
                  {steps[currentStepIndex]}
              </div>
              <div className={!isFirstStep ? "flex justify-between" : "text-right"}>
              {!isFirstStep && !isLastStep && <button type="button" onClick={back} className="text-Primary-PurplishBlue hover:text-Primary-MarineBlue ease-linear duration-150 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Go Back</button>}
              {!isLastStep && <button type="submit" className="text-white bg-Primary-PurplishBlue hover:bg-Primary-MarineBlue ease-linear duration-150 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{currentStepIndex === steps.length-2 ? "Finish": "Next Step"}</button>}
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
