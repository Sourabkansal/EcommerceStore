import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../contextStore/Cartcontext";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";


const cart = () => {
 
  let {data , setData} = useContext(CartContext);
  let [ subtotal , setsubtotal] = useState();
  
  // console.log(data)

  
  useEffect(()=>{
    let data2 = localStorage.getItem('Cart')
    if(data2){
      setData(JSON.parse(data2))
      let subdata = JSON.parse(data2);
      setsubtotal( subdata.reduce((total , curr )=>{
        return total + curr.price * curr.quantity
      },0))
    }


  },[])
  
  // useEffect (()=>{
  //    setsubtotal( data.reduce((total , curr )=>{
  //          return total + curr.price * curr.quantity
  //    },0))
  // }, [])
 
  console.log(subtotal)

  let clearCart = ()=>{
    setData([]);

    // localStorage.setItem('Cart',[])
    // localStorage.clear('cart');
    localStorage.removeItem("Cart");
    setsubtotal(0)
  }

  return (
    <div>
      <h1 className="text-center text-blue-700 text-3xl font-bold py-2 dark:text-white ">
        Shopping Cart
      </h1>
      <div className="h-[50px] w-[100px] m-auto py-2">
        <button onClick={clearCart} className="bg-blue-700 px-2 py-1 text-white rounded-md  dark:text-white ">
          Clear cart
        </button>
      </div>

      <div>
        <div  className="bg-slate-50 w-[80%]  m-auto pb-10 pt-7 my-3 dark:bg-gray-200">

          {
              data.map((item)=>{
                 return <div key={item.id} className="bg-white w-[95%] sm:h-[125px] m-auto px-3 dark:text-black  ">
            <div className="flex sm:justify-evenly sm:items-center sm:flex flex-col sm:flex-row ">
              <div>
                <img
                  className="h-[118px] w-[90px] m-auto "
                  src={item.image}
                  ></img>
              </div>
              <div className="flex-col m-auto w-[200px] ">
                <div>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                </div>
                <div className="font-semibold text-center">
                  <span>{item.price}</span>
                </div>
              </div>
              <div className="flex gap-3 m-auto">
                <span className="font-semibold">Quantity</span>
                <div>
                  <button className="h-[32px] w-[25px] bg-gray-200 text-2xl rounded-l-xl font-bold">
                    -
                  </button>
                  <span className="h-[32px]  px-2 bg-slate-100 text-2xl">
                    {item.quantity}
                  </span>
                  <button className="h-[32px] w-[25px] bg-gray-200 text-2xl rounded-r-xl font-bold ">
                    +
                  </button>
                </div>
              </div>
              <div className="m-auto ">
                <span className="font-bold mx-2">Total: </span>{" "}
                <span className="font-semibold ">{(item.price *item.quantity).toFixed(2)}</span>
              </div>
              <div className="m-auto">
                <button className="bg-blue-600 text-white h-[30px] w-[30px] text-[23px] px-1 mx-2 rounded-md">
                  <MdDelete />
                </button>
                <NavLink to={`/product/${item.id}`}>

                <button  className="bg-red-600 text-white h-[30px] w-[30px] text-[19px] px-2  rounded-md">
                  <FaEdit />
                </button>
                </NavLink>

              </div>
            </div>
            <hr className="mx-7"></hr>
          </div>
                })
          }

          {/* Checkout sec */}
          <div className="bg-white w-[95%] h-[55px] m-auto flex justify-between items-center px-4 ">
            <div>
              <button className="bg-red-600 px-2 py-1 text-white font-semibold rounded-md  ">
                Checkout
              </button>
            </div>
            <div>
              <span className=" text-xs font-bold mx-2 sm:text-xl dark:text-black">Total Amount :</span>{" "}
              <span className=" text-xs font-semibold text-blue-600 sm:text-xl">
                {`${ subtotal?(subtotal).toFixed(2) : ""}`}
              </span>
            </div>
          </div>
          <hr className="mx-7"></hr>
        </div>
      </div>
    </div>
  );
};

export default cart;
