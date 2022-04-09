import React from 'react';
import logo from '../imgs/logo.jpg';
import search from "../imgs/icons/search.svg"
import bags from "../imgs/icons/shopping bag.svg"
import avatar from "../imgs/avatar.png"

const navbarList=["Restaurants","Deals","My orders"];

function Navbar() {
  return (
    <div className=' px-32 py-4 grid grid-cols-8 items-center'>
<div className="col-start-1 col-end-2 justify-self-center" ><img className='h-[100px] w-[100px] ' src={logo} alt="logo"/></div>
<form className='w-[205px] h-10 rounded-xl bg-[#EDEEF2] flex items-center col-start-2 col-end-3 '><input  className='bg-transparent pl-5 ' type="text" placeholder='Search '/><button><img src={search} alt="search"/> </button>  </form>
<ul className='flex gap-6  px-8  col-start-5 col-end-7 justify-self-end '>
    {navbarList.map(Element=>{
        return (<li className='text-[14px] font-bold'> {Element} </li>)
    })  
    
}
    </ul>
    <div className="rounded-2xl bg-[#F3F4FF] p-2 relative  col-start-7 col-end-8 justify-self-center w-fit ">
        <img className='h-[25px] w-[25px] m-1' src={bags} alt='notifications'/>
        <span className="absolute right-0 top-0 h-5 w-5 rounded-lg bg-[#4E60FF] text-white text-center text-[12px]  ">4</span>

    </div>
    <div  ><img className="rounded-2xl h-12 w-12 col-start-8 col-end-9" src={avatar} alt="avatar"/> </div>
    </div>
  );
}

export default Navbar;
