import React from 'react';

export interface IStepperController {
  handleClick(direction:any):void,
  currentStep: number;
  steps:String[],


}


function Stepper_controlers(props:IStepperController) {
  return (
    <div className=" flex items-center justify-around mt-4 mb-8">
        <button onClick={props.handleClick} className={`text-[#4A3AFF] border-[1px] border-[#4A3AFF] rounded-xl px-5 py-3 text-lg leading-5 cursor-pointer transition duration-200 ease-in-out ${props.currentStep==1?"opacity-50 cursor-not-allowed ":""}`}>Previous step</button>
        <button onClick={()=>props.handleClick("next")} className='text-white bg-[#4A3AFF] rounded-xl px-5 py-3 text-lg leading-5 cursor-pointer transition duration-200 ease-in-out outline-none opacity-95 hover:opacity-100 '>{props.currentStep==props.steps.length ? "Confirm" :"Next"}</button>
        
       
 


    </div>
  );
}

export default Stepper_controlers;
