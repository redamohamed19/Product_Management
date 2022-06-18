    import React, { useEffect, useRef, useState } from "react";
    import Modal from "../component/Modal/Modal"
    import add from "../imgs/icons/add.png"
    import axios from 'axios';



    export default function Form() {

        const [ModalV, SetModalV] = useState(false);
        const [resultArray, setResultArray] = useState([]);
        const [TypeArray, setTypeArray] = useState([]);
        const Name:any=useRef("")
        const NameProduct:any=useRef("")
        const Imagesrc:any=useRef("")
        const Price:any=useRef("")
        const ProductType:any=useRef("")
        const Color:any=useRef("")
     


 
        
        useEffect(() => {
            
 
            const GetTypeproduct = async () => {
                await axios.get('http://localhost:8000/producttype/getAll')
                .then(
                  response => setTypeArray(response.data))
              }
         
            GetTypeproduct();
          }, []);

          const PostNewProductType=()=>{
             const url="http://localhost:8000/producttype/post";
            axios.post(url, {Name:Name.current.value})
            .then(function (response) {
    
            })
            SetModalV(false)
      
          }
          const PostNewProduct=()=>{
            const url="http://localhost:8000/product/post";
           axios.post(url, {Name:NameProduct.current.value,Imagesrc:Imagesrc.current.value,Price:Price.current.value,ProductType:ProductType.current.value,Color:Color.current.value})
           .then(function (response) {
   
           })
         
         }


      
        return (
    <div>


    
    
            <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Product Information</h3>
                    <p className="mt-1 text-sm text-gray-600">Use this Form to Add new product</p>
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
                            ref={NameProduct}
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
                            ref={Imagesrc}
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
                            type="text"
                            name="first-name"
                            id="first-name"
                            ref={Price}
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
                            ref={ProductType}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                               {TypeArray.map((Element:any)=>{
                                    return(    <option value={Element._id}>{Element.Name}</option>)
                                })}
                            </select>
                            <img src={add} className='w-10' onClick={()=>{SetModalV(true)}}/>
                     </div>
                        </div>
                        <Modal      
                title=''
                            visible={ModalV}
                            onClose={() => {
                                SetModalV(false);
                            }}
                        >

    <div>
    <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Product Type</h3>
                    <p className="mt-1 text-sm text-gray-600">Use this Form to Add new product Type.</p>
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
                            ref={Name}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
    
          

                
           
                        
 


   <div className="flex justify-center">
  <div>
  {resultArray.map((Element:any)=>{ console.log(Element)
                                    return(     <div className="form-check flex">
                                    <input  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={Element._id} id="Attribute"/>
                                    <label className="form-check-label inline-block text-gray-800" >
                                     {Element.Name}
                                    </label>
                                  </div>)
                                })}
  
    
  </div>
</div>

    
    
        
            
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                        onClick={PostNewProductType}
                     
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
                
                        </Modal>
                        <div className="col-span-6 ">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Color
                            </label>
                            <select
                            id="country"
                            name="country"
                            ref={Color}
                            autoComplete="country-name"
                            className=" mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                            <option>Red</option>
                            <option>Black</option>
                            <option>Blue</option>
                            </select>
                        </div>

    
    
        
            
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                         onClick={PostNewProduct}
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
    