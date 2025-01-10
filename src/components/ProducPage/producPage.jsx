import React, { useContext, useState } from 'react'
import  {NavLink, useParams } from 'react-router-dom'
import { productContext } from '../contextStore/ProductStore';
import {FaStar} from "react-icons/fa6"
import { CartContext } from '../contextStore/Cartcontext';
import { FaShoppingCart } from "react-icons/fa";

function producPage() {
 let {product , setproduct } = useContext(productContext);
   let {data , setData} = useContext(CartContext);
 let productid = useParams();
 let singleProduct = product.filter((item)=>{
     return item.id==productid.id
 })


 let [quantityy , setquantityy] = useState();

 let quantityCount = (e)=>{
    setquantityy(e.target.value)
 }

 console.log(quantityy)

 let addtocart=(itemm)=>{
  if(quantityy==undefined){
    quantityy=1;
}
    console.log(itemm.id)
    let index ; 
    let idd = itemm.id
    let matched = data.filter((item , a )=>{
      item.id==idd ? index = a : " ";
        return item.id==idd
    });
    let unmatched = data.filter((item)=>{
      return item.id!=idd
  });
  if( matched.length > 0  ){
    let obj = matched[0];
    obj = { ...obj, quantity: Number(obj.quantity) + Number(quantityy) };
    let newarr = JSON.parse(JSON.stringify(data)) ;
    newarr.splice(index , 1 , obj )
    setData(newarr)
    localStorage.setItem("Cart" , JSON.stringify(newarr))
    // console.log(newarr)
  }
  else{
    localStorage.setItem("Cart" , JSON.stringify([...unmatched, { ...itemm ,  quantity: quantityy }]))

    setData([...unmatched, { ...itemm ,  quantity: quantityy }])
  }
 }



console.log(singleProduct)
  return (
     <>
       {
         singleProduct.map((item)=>{
              return <div>
                     <div key={item.id} className=' flex flex-col  h-[650px] w-[80%]  my-7  m-auto border-2 border-gray-800 dark:bg-gray-300 text-black  sm:flex sm:flex-row  sm:h-[350px] sm:w-[55%] sm:m-auto sm:my-7 lg:my-7  ' >
                  <div className='border-2 h-[300px] w-[90%]  sm:h-[95%] sm:w-[300px] mt-2 ml-2 border-gray-500 dark:bg-white '>
                     <img className='h-[100%] w-[220px] m-auto' src={item.image}></img>
                  </div>
                  <div className=' w-[50%]  ml-3  flex flex-col gap-2  '>
                       <h1 className='font-bold mt-9'>{item.name}</h1>
                       <p className='text-gray-600 font-semibold'>{item.subcategory}</p>
                      <span className='text-yellow-400 flex' > <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                       <p className='text-gray-600 font-semibold'>{item.main_category}</p>
                       <h1 className='font-bold font-sans'>{`$${item.price}`}</h1>
                       <p className='text-gray-500 text-xs'>Quantity</p>
                       <input onChange={quantityCount}  type='number' min={1} defaultValue={1} className='border-2 dark:border-gray-500 w-[90%] h-[30px] ' ></input>
                       
                       <div className='flex gap-3'>
                         <div><button  onClick={()=>addtocart(item)} className='bg-green-600 text-white rounded-sm w-[130px] h-[30px] '>Add to cart </button></div>

                       <NavLink to={"/addcart"}>
                         <div className='bg-red-600 w-[30px] h-[30px] rounded-sm pt-1 pl-1 text-[20px]'><FaShoppingCart className='text-white' /></div>
                         </NavLink>   
                      
                       </div>
                  </div>
              </div>
              <div className='ml-6 mb-5'>
                  <p><span className='font-bold'>Discription :-</span> {item.description}</p>
              </div>
              </div>
         })
       }
      </>
  )
}

export default producPage