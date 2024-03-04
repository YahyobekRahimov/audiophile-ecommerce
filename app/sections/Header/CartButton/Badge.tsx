"use client";

import { IProductInCart } from "@/app/types/types";

export default function Badge({
   products,
}: {
   products: IProductInCart[];
}) {
   let numberOfProducts = 0;
   products.forEach((product) => {
      numberOfProducts += product.count;
   });
   return (
      <div
         className={`absolute top-0 right-0 bg-purple-700 flex justify-center items-center translate-x-[50%] translate-y-[-50%] text-white w-5 h-5 text-[0.7rem] rounded-full ${
            numberOfProducts > 0 ? "visible" : "invisible"
         }`}
      >
         {numberOfProducts}
      </div>
   );
}
