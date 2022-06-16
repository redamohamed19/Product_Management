import React, { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal/Modal"
import add from "../imgs/icons/add.png"
import axios from 'axios';


export default function Form() {
    const [resultArray, setResultArray] = useState([]);
    const [TypeArray, setTypeArray] = useState([]);
    const Name:any=useRef("")
    const Attribute:any=useRef()



    
    useEffect(() => {
        const expensesListResp = async () => {
          await axios.get('http://localhost:8000/Attribute/getAll')
          .then(
            response => setResultArray(response.data))
        }
        const GetTypeproduct = async () => {
            await axios.get('http://localhost:8000/producttype/getAll')
            .then(
              response => setTypeArray(response.data))
          }
        expensesListResp();
        GetTypeproduct();
      }, []);

      const PostNewProductType=()=>{
        const url="http://localhost:8000/producttype/post";
        axios.post(url, {Name:Name.current.value,Attribute:Attribute.current.value})
        .then(function (response) {
          console.log({Name:Name.current.value,Attribute:[Attribute.current.value]});
        })
        SetModalV(false)
  
      }


    const [ModalV, SetModalV] = useState(false);
    return (
<div>




        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
                <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 ">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-6 ">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        ImageSRC
                        </label>
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="col-span-6 ">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Price
                        </label>
                        <input
                        type="number"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>


                    <div className=" col-span-6 ">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        productType
                        </label>
                 <div className="flex gap-2">
                 <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                           {TypeArray.map((Element:any)=>{
                                return(    <option value={Element._id}>{Element.Name}</option>)
                            })}
                        </select>
                     
                 </div>
                    </div>
                 
                    <div className="col-span-6 ">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Color
                        </label>
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className=" mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        <option>Red</option>
                        <option>Black</option>
                        <option>Blue</option>
                        </select>
                    </div>
                    <div className="col-span-6 ">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        AssignedAttributes
                        </label>
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className=" mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        </select>
                    </div>


    
        
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Save
                    </button>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>

        
</div>
    )
}
