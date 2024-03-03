"use client";

import CartIcon from "@/app/components/IconComponents/CartIcon";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import CartProducts from "./CartProducts";

export default function CartButton() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const handleClick = () => {
      setIsOpen(!isOpen);
   };
   const productsInCart = useAppSelector(
      (state) => state.cartProducts
   );
   return (
      <div className="relative">
         <button className="relative" onClick={handleClick}>
            <CartIcon />
         </button>
         <div
            className={`bg-white p-8 absolute top-0 left-0 ${
               isOpen ? "block" : "hidden"
            }`}
         >
            <div className="flex items-center justify-between">
               <h3>Cart ({productsInCart.length})</h3>
               <button className="underline">Remove all</button>
            </div>
            <CartProducts productsInCart={productsInCart} />
         </div>
      </div>
   );
}
