"use client";

import { useEffect } from "react";
import OrderConfirmationIcon from "../components/IconComponents/OrderConfirmationIcon";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Button from "../components/Button/Button";

export default function OrderCompleted({
   formSuccessful,
   setFormSuccessful,
}: {
   formSuccessful: boolean;
   setFormSuccessful: any;
}) {
   const products = useAppSelector((state) => state.cartProducts);
   let total = 0;
   let shipping = 50;
   let vat = 1079;
   products.forEach((product) => {
      total += product.count * product.price;
   });
   let grandTotal = total + shipping + vat;
   useEffect(() => {
      if (formSuccessful) {
         document.body.style.overflow = "hidden";
         document.addEventListener(
            "keydown",
            function (event: KeyboardEvent) {
               if (event.key === "Escape") {
                  setFormSuccessful(false);
               }
            }
         );
      } else {
         document.body.style.overflow = "";
      }

      return () => {
         document.body.style.overflow = "";
      };
   }, [formSuccessful]);

   return (
      <>
         <div
            className={`bg-white rounded-lg py-8 px-7 fixed top-[15%] transition-all translate-y-[-50%] duration-500 left-[50%] opacity-0 w-[90vw] translate-x-[-50%] z-10 md:w-[50vw] md:translate-x-[-50%] md:top-[50%] md:left-[50%] md:translate-y-[-50%] lg:w-[40vw] lg:translate-x-[-50%] ${
               formSuccessful
                  ? "visible translate-x-[-50%] translate-y-[0%] opacity-100 md:translate-x-[0%]"
                  : "invisible"
            }`}
         >
            <OrderConfirmationIcon />
            <h2 className="text-[1.5rem] tracking-[0.85px] leading-[1.16em] uppercase font-bold mt-6 mb-4">
               Thank you for your order
            </h2>
            <p className="text-[0.9375rem] leading-[1.66em] mb-[2rem] text-custom-black text-opacity-50">
               You will receive an email confirmation shortly.
            </p>
            <ul className="flex flex-col gap-6 bg-custom-grey rounded-t-lg overflow-hidden">
               {products.length
                  ? products.map((product, index) => {
                       return (
                          <li
                             key={index}
                             className="flex px-4 pr-10 items-center gap-[1rem] bg-custom-grey"
                          >
                             <Image
                                src={product.image.mobile}
                                alt={product.name}
                                width={64}
                                height={64}
                             />
                             <div className="w-full flex flex-col gap-1">
                                <span className="text-[0.9375rem] font-bold leading-[1.66em]">
                                   {product.name}
                                </span>
                                <span className="font-bold text-sm text-opacity-50 text-custom-black">
                                   $ {product.price.toLocaleString()}
                                </span>
                             </div>
                             <span className="text-[0.9375rem] font-bold leading-[1.66em]">
                                x{product.count}
                             </span>
                          </li>
                       );
                    })
                  : ""}
            </ul>
            <div
               style={{
                  borderRadius: "0px 0px 8px 8px",
                  background: "#000",
               }}
               className="flex flex-col gap-2 rounded-b-lg py-[1rem] px-6 uppercase"
            >
               <span className="text-[0.9375rem] font-weight text-opacity-50 text-custom-white">
                  Grand total
               </span>
               <span className="font-bold text-custom-white text-lg">
                  $ {grandTotal.toLocaleString()}
               </span>
            </div>
            <Button
               className="mt-6"
               style={{ width: "100%" }}
               variant="primary"
               link="/"
            >
               Back to home
            </Button>
         </div>
         <div
            onClick={() => setFormSuccessful(false)}
            className="w-screen h-screen fixed top-0 left-0 bg-custom-black opacity-30"
         ></div>
      </>
   );
}
