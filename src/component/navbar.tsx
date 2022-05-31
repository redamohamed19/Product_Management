import React from 'react';
import logo from '../imgs/logo.jpg';
import search from "../imgs/icons/search.svg"
import add from "../imgs/icons/add.png"
import avatar from "../imgs/avatar.png"
import close from "../imgs/icons/close.png"
import {INavbar} from "../Interfaces/Interfaces"
import {useRef,useState} from "react"



const navbarList=["Main","Product","Client"];



function Navbar(props:INavbar) {
    const navbar:any=useRef("null")
     const [isActive, setActive] = useState(true);
     const addproduct=useRef(null);

     const AddProductFunc=()=>{
         props.SetModalV(true)
     }

    
  return (
    <div className=' relative px-32  py-4 grid grid-cols-8 items-center lg:px-4 sm:gap-2 sm:pr-8 '>
<div className="col-start-1 col-end-2 justify-self-center sm:col-end-3 sm:justify-self-start " ><img className='h-[100px] w-[100px]  sm:h-[80px] sm:w-[80px]' src={logo} alt="logo"/></div>
<form className='w-[245px] h-10 rounded-xl bg-[#EDEEF2] flex items-center col-start-2 col-end-3 sm:hidden'><input  className='bg-transparent pl-5 ' type="text" placeholder='Search '/><button><img  className="w-5 max-w-none"  src={search} alt="search"/> </button>  </form>
<ul className='flex gap-6  px-8  col-start-5 col-end-7 justify-self-end lg:col-start-4 sm:hidden'>
    {navbarList.map(Element=>{
        return (<li className='text-[14px] font-bold'> {Element} </li>)
    })  
    
}
    </ul>
    <div ref={addproduct} onClick={AddProductFunc} className="flex items-center gap-1 px-4 rounded-2xl bg-[#5457ac] p-1 relative  col-start-7 col-end-8 justify-self-center w-fit sm:col-start-6 text-white font-bold">
        Add Product<img className='h-[25px] w-[25px] m-1' src={add} alt='notifications'/>
       

    </div>
    <div className={isActive ? "res_nav close_navbar" : "res_nav open_navbar"}  ref={navbar}> 
    <div className='absolute top-4 right-4'>
     <img src={close} alt="close" onClick={()=>{setActive(true)}}/>
    </div>
     <ul className=''>
    {navbarList.map((Element,index)=>{
        return (<li className='text-[14px] font-bold text-center' key={index}> {Element} </li>)
    })  
    
}
    </ul></div>
    <div className='avatar col-start-8 sm:h-[45px] sm:w-[45px]  ' onClick={()=>{setActive(false)}}>
        <img className="rounded-2xl h-12 w-12 sm:h-[45px] sm:w-[45px] "  src={avatar} alt="avatar" /> </div>
    </div>
  );
}

export default Navbar;
