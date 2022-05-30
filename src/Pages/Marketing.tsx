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
<div className='flex  px-0 py-32 sssm:py-10 sm:py-4 lg:px-16 sm:pr-8 justify-around lg:flex-col lg:gap-32 '>
  <div className='w-2/5 lg:w-full '>

    <h1 className=' text-6xl font-bold py-10 sm:text-[50px] sm:text-center  sssm:text-4xl leading-20  sssm:py-3'>We're <span className='text-[#4E60FF] '>Serious</span> For <span className='text-[#4E60FF]'>Food</span> And Delivery </h1>
    <p className=' text-2xl py-3 sssm:text-xl sm:text-center lg:w-4/5'>
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
  <div className='w-2/5 relative flex justify-center items-center lg:w-full lg:hidden'>
    <div className=''>
    <img className='plat xl:w-32  xl:h-32' src={Plat01} alt="plat"/>
    <img className='plat xl:w-32  xl:h-32' src={Plat02} alt="plat"/>
    <img className='plat xl:w-32  xl:h-32' src={Plat03} alt="plat"/>
    <img className='plat xl:w-32  xl:h-32' src={Plat04} alt="plat"/>
    </div>
    <div  className='Banner '>
      <img className='xl:w-64 ' src={Banner} alt="Banner"/>
    </div>
  </div>
</div>
    </div>
  );
}

export default Marketing;
