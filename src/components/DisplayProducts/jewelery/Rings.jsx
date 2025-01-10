import React from 'react'
import { useContext } from 'react';
import { productContext } from '../../contextStore/ProductStore';
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { wishlistContext } from '../../contextStore/WishlistContext';

const Rings = () => {
  const {wishlistt , setwishlistt} = useContext(wishlistContext);

  const { product , setproduct } = useContext(productContext);
     console.log(product)
   
     let rings = product.filter((item)=>{
        return item.subcategory== "Rings"
        
     })
     let addWishlist =(idd)=>{  
      let WishMatched = rings.filter((item)=>{
         return  item.id==idd
      }) 
      let mathced  = wishlistt.filter((item)=>{
         return item.id==idd
       })
       let newarr = [...wishlistt , ...WishMatched  ]
       mathced.length>0?"":setwishlistt(newarr);
  
       alert("Added to Wishlist")
     }

     console.log(rings)
   console.log(" hello")
     return  <div className='flex flex-wrap gap-5'>
         {
           rings.map((item)=>{
             return  <NavLink key={item.id}  to={`/product/${item.id}`}>
             <div className='border-2 flex flex-col gap-3 border-gray-500 w-[230px] mt-5 mb-5 ml-5 pl-3 pt-3 lb-3 pr-3  hover:bg-gray-100 dark:bg-gray-200 text-black '>
            <div className='h-[230px] w-[205px] border-2 border-gray-400 bg-white '>
               <img className='h-[227px] w-auto m-auto' src={item.image}></img>
            </div>
            <div className='flex justify-between'>
              <div className=' whitespace-nowrap overflow-hidden text-ellipsis w-[70%] '  > 
                <h1 className=' font-semibold '>{item.subcategory}</h1>
                <p className='text-sm text-gray-700'>{item.name}</p>
              </div>
              <div><p className='font-semibold font-sans'>{`$ ${item.price}`}</p></div>
            </div>
            <div className='flex mb-3'>
                         <NavLink to={"/Rings"} >
                         <div onClick={()=>addWishlist(item.id) } className='h-[30px] w-[30px] bg-black text-white border-2 border-gray-400 pt-1 pl-1'>
                           <FaRegHeart className='text-[18px]  ' />
                         </div>
                         </NavLink>
              <div className='w-[88%] ml-2'>
                <button className='border-2 border-black h-[30px] w-[100%] bg-white font-semibold text-xs'>Add to cart</button>
              </div>
            </div>
         </div>
         </NavLink>
            
        })
        }
      </div>
    
  
}

export default Rings