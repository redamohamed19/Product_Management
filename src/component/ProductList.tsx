import React, { useEffect, useState } from "react"
import Updateform from "../component/updateform"
import Modal from "./Modal"
import update from "../imgs/icons/update.png"
import axios from "axios";


const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'Silver',
      },
          {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'Silver',
      },
    // More products...
  ]
  
  export default function Example() {
    const [ModalV, SetModalV] = useState(false);
    const [ProductArray, setProductArray] :any= useState([]);

    useEffect(() => {
            
 
      const GetTypeproduct = async () => {
          await axios.get('http://localhost:8000/product/getAll')
          .then(
            response => setProductArray(response.data))
        }
   
      GetTypeproduct();

    }, []);
      console.log(ProductArray)
    return (
      <div className="bg-white">
        <Modal      
            title=''
						visible={ModalV}
						onClose={() => {
							SetModalV(false);
						}}
					>
				<Updateform/>
					</Modal>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {ProductArray.map((product:any) => (
              <div key={product._id} className="group relative" onClick={()=>{SetModalV(true)}}>
                <button className=" absolute right-0 t-0 "  ><img className="w-10" src={update} alt="update" /> </button>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.Imagesrc}
                    alt={product.Name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.Name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.Color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.Price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }