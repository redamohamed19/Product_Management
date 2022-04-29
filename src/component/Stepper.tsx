import React,{useEffect,useState,useRef} from 'react';

export interface IStepper {
  currentStep: number;
  steps:String[]
}
export interface IStepref {
  Description:String,
  completed:Boolean,
  highlited:Boolean,
  selected:Boolean
}


function Stepper(props:IStepper) {
  const [newStep, setNewStep] = useState<any>([]);
  const stepsRef:any = useRef();
  function updateStep(currentStep: number, current: any) {  
  const newSteps=[...current]
  let count=0;
  while(count<newSteps.length){
    if(count===currentStep){
      newSteps[count]={
        ...newSteps[count],
        completed:true,
        highlited:true,
        selected:true

      }
     
    }
    else if(count<currentStep){
      newSteps[count]={
        ...newSteps[count],
        completed:true,
        highlited:false,
        selected:false

      }
    }
    else{
      newSteps[count]={
        ...newSteps[count],
        completed:false,
        highlited:false,
        selected:false

      }
    }
    count++;
  }
 
return newSteps;

  }
  useEffect(()=>{
    const stepState=props.steps.map((step,index)=>{
       return Object.assign({},
        {
          Description:step,
          completed:false,
          highlited:index===0 ? true :false,
          selected:index===0 ? true :false
        })
    })
    stepsRef.current=stepState;
    const current=updateStep(props.currentStep-1,stepsRef.current);
    setNewStep(current)

  },[props.steps,props.currentStep])

  return (
<div className='flex justify-between py-6'>
{newStep.map((step:IStepref,index:number)=>{
return(
  <div key={index} className="mx-4 p-8 flex justify-between items-center">

  {}
    <div className='relative flex flex-col items-center'>
        <div className=' rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 border-gray-300 border-2'>{index+1}</div>
        <div className='absolute top-0 text-center mt-16 w-32 text-base font-medium uppercase'>{step.Description}</div>
    </div>
    <div className="flex-auto  border-t-2 trasition duration-500 ease-in-out"></div>
  
   
  
  
  
  </div>
)
})}
</div>
  );
}

export default Stepper;


