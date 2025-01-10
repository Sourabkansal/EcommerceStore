import React from "react";
import { useContext } from "react";
import { productContext } from "../contextStore/ProductStore";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { wishlistContext } from "../contextStore/WishlistContext";
const MensWear = () => {
  const { wishlistt, setwishlistt } = useContext(wishlistContext);

  const { product, setproduct } = useContext(productContext);
  // console.log(product);
  console.log(wishlistt);

  let mansWera = product.filter((item) => {
    return item.main_category == "Men's Wear";
  });
  console.log(mansWera);

  let addWishlist = (idd) => {
    let WishMatched = mansWera.filter((item) => {
      return item.id == idd;
    });
    let mathced = wishlistt.filter((item) => {
      return item.id == idd;
    });
    let unmatch = wishlistt.filter((item)=>{
      return item.id != idd;
    })
    if(!(mathced.length > 0)){
      localStorage.setItem("wishlist", JSON.stringify([...wishlistt , ...WishMatched]))
         setwishlistt([...wishlistt, ...WishMatched])
    } else {
      localStorage.setItem("wishlist" , JSON.stringify(unmatch))
      setwishlistt(unmatch)
    }
    // let newarr = [...wishlistt, ...WishMatched];
    // localStorage.setItem("wishlist", JSON.stringify(newarr));
  };

  let newitemm = mansWera.map((item) => {
    let newitem = { ...item, infav: false };
    wishlistt.map((item2) => {
      if (item.id == item2.id) {
        newitem = { ...item, infav: true };
      }
    });
    return newitem;
  });

  console.log(newitemm);
  console.log(wishlistt);

  return (
    <>
    <div>
      <div className=" flex justify-center sm:justify-start flex-wrap gap-5  ">
        {newitemm.map((item) => {
          return (
            <NavLink key={item.id} to={`/product/${item.id}`}>
              <div className="  border-2 flex flex-col gap-3 border-gray-500 w-[230px] mt-5 mb-5 ml-5 pl-3 pt-3 lb-3 pr-3  hover:bg-gray-100 dark:bg-gray-200 text-black ">
                <div className="h-[230px] w-[205px] border-2 border-gray-400 bg-white ">
                  <img
                    className="h-[227px] w-auto m-auto"
                    src={item.image}
                  ></img>
                </div>
                <div className="flex justify-between">
                  <div className=" whitespace-nowrap overflow-hidden text-ellipsis w-[70%] ">
                    <h1 className=" font-semibold ">{item.subcategory}</h1>
                    <p className="text-sm text-gray-700">{item.name}</p>
                  </div>
                  <div>
                    <p className="font-semibold font-sans">{`$ ${item.price}`}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  <NavLink to={"/mensWear"}>
                    <div
                      onClick={() => addWishlist(item.id)}
                      className="h-[30px] w-[30px] bg-black text-white border-2 border-gray-400 pt-1 pl-1"
                      >
                      {/* <FaRegHeart className={item.infav ? "bg-red-500" : ""} /> */}

                      {item.infav ? (
                        <FaHeart className="text-[#FF3131] text-[18px]" />
                      ) : (
                        <FaRegHeart className="text-[18px]" />
                      )}
                    </div>
                  </NavLink>
                  <div className="w-[88%] ml-2">
                    <button className="border-2 border-black h-[30px] w-[100%] bg-white font-semibold text-xs">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
        </div>

    </>
  );
};

export default MensWear;
