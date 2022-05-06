import React,{useState} from 'react';
import { Steppercontext } from '../Context/stepper_Context';
import review from '../imgs/ads/reviews.png';
import order from '../imgs/ads/order.png';
import secorder from '../imgs/ads/secorder.png';
import Stepper from '../component/Stepper';
import Steppercontrolers from '../component/Stepper_controlers';
import Phonenumber from '../component/signin_steps/Phone_number';
import PasswordEntry from '../component/signin_steps/PasswordEntry';

function Sign_Up() {
  const [currentStep, setCurrentStep] = useState(1);
  const[userData,SetuserData]=useState("")
  const [finalData,SetFinalData]=useState([]);
  const[GoNext,SetGoNext]=useState(true)
  const steps = [
    "Account Information",
    "Password Entry",
    "Payment",
    "Complete",
  ];
  const displayStep = (step:Number) => {
    switch (step) {
      case 1:
        return <Phonenumber/>;
      case 2:
        return <PasswordEntry GoNext={GoNext}  SetGoNext={SetGoNext}  />;

      default:
    }
  };
  const handleClick=(direction:any)=>{
    let NewStep=currentStep;
    direction==="next"? NewStep++:NewStep--;
    NewStep>0 && NewStep<=steps.length && setCurrentStep(NewStep)
  }
  return (
    <div className="flex h-[100vh]">
   
      <div className="bg-[#697BFF] w-[55%] lg:w-[50%] md:hidden">
        <div className="flex items-center justify-center mt-16">
          {' '}
          <img className="xl:w-[250px] lg:w-[200px]" src={review} alt="review" />
          <img className="lg:w-[200px]" src={secorder} alt="order preview" />{' '}
        </div>
        <img
          className="flex   justify-center px-48 xl:px-24 lg:py-8 md:py-4 "
          src={order}
          alt="order preview second"
        />
        <h1 className="text-[32px] leading-10 font-bold text-white flex items-center justify-center mt-8 lg:text-2xl ">
          Leave reviews for all meals
        </h1>
        <p className="text-[14px] leading-5  text-white flex items-center mt-4 ml-32 lg:ml-16">
          Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
          probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
        </p>
        <div className="flex gap-4  justify-center  mt-8">
          <span className="h-[15px] w-[15px] bg-[#fff] roun justify-center rounded-[50%] opacity-70 "></span>
          <span className="h-[15px] w-[15px] bg-[#fff] rounded-[50%] opacity-70"></span>
          <span className="h-[15px] w-[15px] bg-[#fff] rounded-[50%] "></span>
          <span className="h-[15px] w-[15px] bg-[#fff] rounded-[50%] opacity-70"></span>
        </div>
      </div>
      <div className='bg-white  w-1/2'>
      <div className='my-24 shadow-xl rounded-2xl  mx-auto w-4/5 pb-6'>
        <div className="">
        <Stepper steps={steps}  currentStep={currentStep} />
        <Steppercontext.Provider value={{userData,SetuserData,finalData,SetFinalData}}>
          {displayStep(currentStep)}
        </Steppercontext.Provider>
        </div>

     
        <Steppercontrolers handleClick={handleClick} steps={steps}  currentStep={currentStep} GoNext={GoNext}  /> 
      </div>
    </div>
    </div>
  );
}

export default Sign_Up;
