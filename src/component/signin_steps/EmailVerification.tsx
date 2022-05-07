import React, {  } from 'react';




function EmailVerification() {
    

  return (
    <div className=' px-24 py-10 h-56 '  >
        
        <div className='flex w-full justify-center gap-8 items-center'>
            <input className='border border-gray-300 w-[50px] h-14 rounded text-2xl text-center' type="text" maxLength={1}  id="1"/>
            <input className='border border-gray-300 w-[50px] h-14 rounded  text-2xl text-center'  type="text" maxLength={1} id="2"/>
            <input className='border border-gray-300 w-[50px] h-14 rounded  text-2xl text-center'  type="text" maxLength={1} id="3"/>
            <input className='border border-gray-300 w-[50px] h-14 rounded  text-2xl text-center'  type="text" maxLength={1} id="4"/>
            <input className='border border-gray-300 w-[50px] h-14 rounded  text-2xl text-center'  type="text" maxLength={1} id="5"/>
            <input className='border border-gray-300 w-[50px] h-14   text-2xl text-center'  type="text" maxLength={1} id="6"/>
        </div>

    </div>
  );
}

export default EmailVerification;
