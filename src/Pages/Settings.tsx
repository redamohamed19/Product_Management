import React from 'react';
import Navbar from  "../component/navbar";
import Side_Nav from '../component/Side_Nav';



function Settings() {
  return (
    <div className=''>
<Navbar/>
<hr/>
<div className='flex  px-48  py-4  lg:px-4  '>
  <Side_Nav/>
  <div className="border-2"></div>
</div>
</div>
  );
}

export default Settings;
