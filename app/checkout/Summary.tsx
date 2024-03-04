"use client";

import { useAppSelector } from "@/lib/hooks";
import Container from "../components/Container";
import Image from "next/image";
import Button from "../components/Button/Button";

export default function Summary({
   handleSubmit,
}: {
   handleSubmit: (e: SubmitEvent) => void;
}) {
   const productsInCart = useAppSelector(
      (state) => state.cartProducts
   );
   let total = 0;
   let shipping = 50;
   let vat = 1079;
   productsInCart.forEach((product) => {
      total += product.count * product.price;
   });
   let grandTotal = total + shipping + vat;
   return (
      <div className="px-6 py-8 bg-white lg:min-w-[350px] lg:h-max">
         <h2 className="uppercase text-lg font-bold tracking-[1.286px] leading-normal mb-[2rem]">
            Summary
         </h2>
         <ul className="flex flex-col gap-6">
            {productsInCart.length
               ? productsInCart.map((product, index) => {
                    return (
                       <li
                          key={index}
                          className="flex items-center gap-[1rem]"
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
               : "You don't have any products"}
         </ul>
         <ul className="mt-8">
            <li className="flex items-center justify-between">
               <span className="text-[0.9375rem] leading-[1.66em] text-opacity-50 uppercase">
                  Total
               </span>
               <span className="text-lg uppercase font-bold">
                  $ {total.toLocaleString()}
               </span>
            </li>
            <li className="flex items-center justify-between">
               <span className="text-[0.9375rem] leading-[1.66em] text-opacity-50 uppercase">
                  Shipping
               </span>
               <span className="text-lg uppercase font-bold">
                  $ {shipping.toLocaleString()}
               </span>
            </li>
            <li className="flex items-center justify-between">
               <span className="text-[0.9375rem] leading-[1.66em] text-opacity-50 uppercase">
                  VAT (included)
               </span>
               <span className="text-lg uppercase font-bold">
                  $ {vat.toLocaleString()}
               </span>
            </li>
            <li className="flex items-center justify-between mt-4">
               <span className="text-[0.9375rem] leading-[1.66em] text-opacity-50 uppercase">
                  Grand Total
               </span>
               <span className="text-lg uppercase font-bold text-custom-brown">
                  $ {grandTotal.toLocaleString()}
               </span>
            </li>
         </ul>
         {/* @ts-ignore */}
         <Button onClick={handleSubmit} className="mt-8 w-full">
            Continue & Pay
         </Button>
      </div>
   );
}
