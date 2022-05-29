import React from 'react';
import Search from "../imgs/icons/Search_White.svg"
import Banner from "../imgs/ads/banner.png"
import NavBarNoAutothentificated from '../component/NavBarNoAutothentificated';
import Plat01 from "../imgs/plat/plat01.png"
import Plat02 from "../imgs/plat/plat02.png"
import Plat03 from "../imgs/plat/plat03.png"
import Plat04 from "../imgs/plat/plat04.png"


function Marketing() {
  return (
    <div className=" h-[100vh]">
<NavBarNoAutothentificated/>
<div className='flex  px-0 py-32  lg:px-4 sm:pr-8 justify-around sm:flex-col sm:gap-32 '>
  <div className='w-2/5 sm:w-full'>

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
  <div className='w-2/5 relative flex justify-center items-center sm:w-full ssm:hidden'>
    <div className=''>
    <img className='plat ' src={Plat01} alt="plat"/>
    <img className='plat ' src={Plat02} alt="plat"/>
    <img className='plat ' src={Plat03} alt="plat"/>
    <img className='plat ' src={Plat04} alt="plat"/>
    </div>
    <div  className='Banner '>
      <img src={Banner} alt="Banner"/>
    </div>
  </div>
</div>
    </div>
  );
}

export default Marketing;
