import React from 'react'
import { useContext } from 'react'
import { wishlistContext } from '../contextStore/WishlistContext'
import { productContext } from '../contextStore/ProductStore'
import { NavLink } from 'react-router-dom'
import { MdAutoDelete } from "react-icons/md";

const wishlist = () => {
  
  

    const {wishlistt , setwishlistt} = useContext(wishlistContext);
    // let wishlistdata = localStorage.getItem("wishlist")
    // let wishdata2 = JSON.parse(wishlistdata)
    // console.log(wishdata2)
    //   const { product , setproduct } = useContext(productContext);
    let deletewishlist = (idd)=>{

      let unmatched = wishlistt.filter((item)=>{
            return item.id!=idd
      })
      localStorage.setItem("wishlist" , JSON.stringify(unmatched ))
      setwishlistt(unmatched)
    }
  
    console.log(wishlistt)

  return (
    <div className='flex flex-wrap'>
    {
      wishlistt.map((item)=>{
           return <NavLink key={item.id}  to={`/product/${item.id}`}>
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
          <div className='flex mb-3 gap-2'>
           
            <div className='w-[88%] '>
              <button className='border-2 border-gray-400 h-[30px] w-[100%] bg-green-700 font-semibold text-white text-xs'>Move to cart</button>
            </div>
            <NavLink to={"/wishlist"} >
            <div onClick={()=>deletewishlist(item.id)}  className='h-[30px] w-[30px] bg-red-600 text-white border-2 border-gray-600 pt-1 pl-1'>
              <MdAutoDelete className='text-[22px]  ' />
            </div>
            </NavLink>

          </div>
       </div>
       </NavLink>
       })
    }

    </div>
  )
}

export default wishlist