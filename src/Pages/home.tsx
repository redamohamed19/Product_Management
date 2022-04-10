import React from 'react';
import Navbar from  "../component/navbar";
import Dessert from "../imgs/ads/dessert.png"
import burger from "../imgs/ads/humburger.png"


function Home() {
  return (
    <div className=''>
<Navbar/>
<div className="flex justify-around px-40 py-4 lg:flex-col xl:gap-5 sm:px-20 ssm:px-12 sssm:px-2 ">
  <div className='bg-[#dadbff] flex lg:flex-col-reverse pr-32 lg:items-center rounded-2xl gap-6 pt-8 justify-between 2xl:pr-16 xl:justify-evenly'>
  <img src={Dessert} alt='dessert' className=" w-[225px] "/>
  <div className="flex flex-col lg:flex-row lg:justify-around justify-around">
<div>    <h2 className="text-xl leading-7 text-[#2B2B43] font-semibold ">All deserts</h2>
    <h1 className="text-[40px] leading-[56px] font-extrabold text-[#4E60FF] ">20% OFF</h1></div>
    <p className="text-sm text-[#83859C] ">Deserty</p>
  </div>
</div>
<div className='bg-[#e5daef] flex lg:flex-col-reverse pr-32 lg:items-center rounded-2xl gap-6 pt-8 justify-between 2xl:pr-16 xl:justify-evenly'>
  <img src={burger} alt='dessert' className=" w-[225px] "/>
  <div className="flex flex-col lg:flex-row justify-around">
  <div>
      <h2 className="text-xl leading-7 text-[#2B2B43] font-semibold ">Big Burgers</h2>
    <h1 className="text-[40px] leading-[56px] font-extrabold text-[#FD6D22] ">50% OFF</h1>
  </div>
    <p className="text-sm text-[#83859C] ">Fooddies</p>
  </div>
</div>
</div>
    </div>
  );
}

export default Home;