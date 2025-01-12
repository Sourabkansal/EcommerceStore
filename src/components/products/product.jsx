import React from 'react'
import {FaStar} from "react-icons/fa6"

const ProductData = [ 
     {
        id : 1 ,
        img : "https://shopsy-tcj.netlify.app/assets/women-NhG2D3pl.png",
       title : "Women Ethnic ",
       rating : "5 ",
       color : "red ",
       aosDelay : "0",
     },
     {
        id : 2 ,
        img : "https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg",
       title : "Women western",
       rating : "4.5",
       color : "white",
       aosDelay : "200",
     },
     {
        id : 3 ,
        img : "https://shopsy-tcj.netlify.app/assets/women3-HFaPDX0l.jpg",
       title : "Goggles",
       rating : "4.7",
       color : "brown",
       aosDelay : "400",
     },
     {
        id : 4 ,
        img : "https://shopsy-tcj.netlify.app/assets/women4-zXERyOhD.jpg",
       title : "Printed T-Shirt",
       rating : "4.4",
       color : "yellow ",
       aosDelay : "600",
     },
     {
        id : 5 ,
        img : "https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg",
       title : "Fashin T-Shirt",
       rating : "4.5",
       color : "Pink",
       aosDelay : "800",
     },
]

const product = () => {
  return (
    <div className='mt-14 mb-12  '> 
     <div className='container '>
        {/* header section  */}
         <div className='text-center  mb-10 max-w-[600px] mx-auto  '> 
               <p className='text-lg text-primary '> Top Selling Products for you</p>
               <h1 className='text-3xl font-bold '>Products</h1>
               <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum praesentium, ut cum doloribus in deleniti sed natus voluptates dolorum sapiente, fuga odit accusamus placeat?</p>
           </div>
     
        {/* bidy section  */}
               <div> 
                    <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                       {/* cards section */}
                           {
                              ProductData.map((item)=>{
                                 return <div key={item.id} className='space-y-3 ' >
                                     <img src={item.img} alt='' className=' h-[340px] w-[250px] sm:h-[240px] sm:w-[170px] object-cover rounded-md ' ></img>
                                        <div>
                                             <h3 className='font-semibold'>{item.title}</h3>
                                             <p className='text-sm text-gray-600'>{item.color}</p>
                                             <div className='flex items-center gap-1 '>  
                                                 <FaStar className='text-yellow-400'/>
                                                 <span>{item.rating}</span>
                                             </div>
                                        </div>
                                     </div>
                              })
                           }
                    </div>
              </div>
          </div>
    </div>
  )
}

export default product