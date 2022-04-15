import React from 'react';
import Clock from '../imgs/icons/clock.svg';
import Bag from "../imgs/icons/shopping bag2.svg"

export interface Weather {
    fetured: boolean;
    name: string;
    time: string;
    price: string;
    categories: Categories;
  }
  export interface Categories {
    name: string;
    icon:any
  }




  const Restaurant = (props: any) => {
    console.log(props)
      return(<div className="border-2 rounded-lg border-[#EDEEF2] ">
          <div className="relative"><img className=' rounded-2xl ' src={props.Data.image} alt=""/>
          {props.Data.fetured && (<p className='tag_featured'>Featured</p>)}
          </div>
     <div className='p-4'>
     <div className=' flex justify-between'>
            <div>
            <h3 className="text-lg leading-6 font-bold  ">{props.Data.name}</h3>
              <div className='flex items-center gap-2 py-2 '>
                  <p className='flex items-center gap-1'> <span><img className=' h-3 w-3' src={Clock} alt="clock"/> </span>{props.Data.time} </p>
                  <p> {props.Data.price} </p>
              </div>
            </div>
            <div>
              <img className='h-5 w-5' src={Bag} alt='Order'/>
          </div>
          </div>
          <div className='py-4 flex gap-2' >
            {props.Data.categories.map((Element:Categories)=>{return(<div className='flex gap-1 bg-[#EDEEF2] w-fit px-2 py-1 rounded-lg '>
              <img src={Element.icon} alt={Element.name}/><p>{Element.name}</p>
            </div>)})}
          </div>
     
     </div>
      </div>)
    
}

export default Restaurant;
