import React,{useState,useRef} from 'react';


export interface IPasswordEntry {
  GoNext: boolean;
  SetGoNext:any

}

function User_info(props:IPasswordEntry) {
  const [MatchPassword,SetMatchPassword]=useState(false);
  const PasswordRef:any=useRef();
  const ConfirmPassword:any=useRef();

  const CheckMatchPassword=():void=>{
    console.log(PasswordRef.current.value)
    if(PasswordRef.current.value!==ConfirmPassword.current.value){
      
    
      SetMatchPassword(true)
      props.SetGoNext(false)
    }
    else{
      SetMatchPassword(false)
      props.SetGoNext(true)
    }
  }
    
  return (
    <div className=' px-24 py-10 '  >
      <div className=''>
<div  className='py-8  '>
       <label className=' text-lg leading-5 font-semibold text-[#727275] py-2'>Password</label><br/>
       <input className=' border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none w-full ' type="password" ref={PasswordRef} />
     </div>
     <div  className='py-8'>
       <label className=' text-lg leading-5 font-semibold text-[#727275] py-2 '>Confirm Password</label><br/>
       <input className=' border-[1px] border-[#EFF0F6] rounded-[46px] text-lg leading-5  text-[#6F6C90] py-3 px-6 outline-none w-full ' onChange={CheckMatchPassword} type="password" ref={ConfirmPassword}/>
     </div>
    {MatchPassword && ( <p className="text-red-500">Please reverify your password</p>)}
</div>

    </div>
  );
}

export default User_info;
