import React from 'react';
import Navbar from  "../component/navbar";
import Side_Nav from '../component/Side_Nav';
import Settings_account from '../component/Settings_account';



function Settings() {
  return (
    <div className=''>
<Navbar/>
<hr/>
<div className='flex  px-48  py-4  lg:px-4  '>
  <Side_Nav/>
  <Settings_account/>
</div>
</div>
  );
}

export default Settings;
