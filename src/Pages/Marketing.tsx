import React from 'react';
import Search from "../imgs/icons/Search_White.svg"
import NavBarNoAutothentificated from '../component/NavBarNoAutothentificated';



function Marketing() {
  return (
    <div className=" h-[100vh]">
<NavBarNoAutothentificated/>
<div className='flex  px-32  py-16  lg:px-4 sm:gap-2 sm:pr-8 '>
  <div className='w-2/5'>

    <h1 className=' text-6xl font-bold py-10 '>We're <span className='text-[#4E60FF] '>Serious</span> For <span className='text-[#4E60FF]'>Food</span> And Delivery </h1>
    <p className=' text-2xl py-3'>
    Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
    </p>
    <form>
      <div className=' border-gray border-[1px] flex rounded-xl py-3 px-2 justify-around  my-8 ' >
        <input className='w-4/5 outline-none' type="text" placeholder='Introduce your City' name="Location" />
        <button className=' rounded-full bg-[#4E60FF] p-2  '>
          <img src={Search} alt="Search"/>
        </button>
      </div>
    </form>
  </div>
  <div>

  </div>
</div>
    </div>
  );
}

export default Marketing;
