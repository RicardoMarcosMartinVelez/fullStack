import Image from "next/image";
import { ShoppingContext } from "@/context/ShoppingContextProvider";
import { useContext, useEffect } from "react";






const CartIcon = () => {

const state = useContext(ShoppingContext);
  

 const counter = state.cart.reduce((counter, item) => counter + item.quantity, 0);

 useEffect(() => {
}, []);

  

  return (
    <div>
        <div className="bg-red-700 flex ml-0.5 z-40 pl-1 items-center text-white text-xs
         rounded-full w-[15px] h-[15px]">{counter}</div>
       <Image
        src="\images\cartwidget.svg"
        alt = "cartwidget"
        width="20"
        height="20"
      />
      </div>
  )
}

export default CartIcon