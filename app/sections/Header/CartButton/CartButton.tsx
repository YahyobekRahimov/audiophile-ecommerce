"use client";

import CartIcon from "@/app/components/IconComponents/CartIcon";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import CartProducts from "./CartProducts";
import { useDispatch } from "react-redux";
import { removeAllProducts } from "@/lib/slices/cartProductsSlice";
import { IProductInCart } from "@/app/types/types";
import Button from "@/app/components/Button/Button";
import Badge from "./Badge";

export default function CartButton() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const dispatch = useDispatch();
   const handleClick = () => {
      setIsOpen(!isOpen);
   };
   const productsInCart: IProductInCart[] = useAppSelector(
      (state) => state.cartProducts
   );

   let total = 0;
   productsInCart.forEach((product) => {
      total += product.count * product.price;
   });

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
         document.addEventListener(
            "keydown",
            function (event: KeyboardEvent) {
               if (event.key === "Escape") {
                  setIsOpen(false);
               }
            }
         );
      } else {
         document.body.style.overflow = "";
      }

      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   return (
      <div className="relative">
         <button className="relative" onClick={handleClick}>
            <CartIcon />
            <Badge products={productsInCart} />
         </button>
         <div
            className={`bg-white rounded-lg z-20 py-8 px-7 fixed top-[15%] transition-all translate-y-[-50%] duration-500 left-[50%] opacity-0 w-[90vw] translate-x-[-50%] z-10 md:w-[50vw] md:translate-x-[-2.5rem] md:top-[10%] lg:w-[40vw] lg:translate-x-[0rem] ${
               isOpen
                  ? "visible translate-x-[-50%] translate-y-[0%] opacity-100 md:translate-x-[0%]"
                  : "invisible"
            }`}
         >
            {productsInCart.length ? (
               <>
                  <div className="flex items-center justify-between gap-10 text-nowrap mb-[2rem]">
                     <h3 className="uppercase font-bold tracking-[1.286px] text-[1.125rem] leading-normal">
                        Cart ({productsInCart.length})
                     </h3>
                     <button
                        className="underline text-opacity-50 hover:text-custom-brown"
                        onClick={() => dispatch(removeAllProducts())}
                     >
                        Remove all
                     </button>
                  </div>
                  <CartProducts productsInCart={productsInCart} />
                  <div className="flex justify-between items-center mt-[2rem]">
                     <span className="uppercase text-[0.9375rem] text-opacity-50">
                        Total
                     </span>
                     <span className="font-bold">
                        $ {total.toLocaleString()}
                     </span>
                  </div>
                  <Button
                     variant="primary"
                     className="w-full mt-6"
                     link="/checkout"
                     style={{ width: "100%" }}
                  >
                     Checkout
                  </Button>
               </>
            ) : (
               <div>You don{"'"}t have any items in the Cart</div>
            )}
         </div>
         {isOpen && (
            <div
               onClick={() => setIsOpen(false)}
               className="w-screen h-screen z-10 fixed top-0 left-0 bg-custom-black opacity-30"
            ></div>
         )}
      </div>
   );
}
