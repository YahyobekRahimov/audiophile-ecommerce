"use client";

import IncrementDecrementButton from "@/app/components/IncrementDecrementButton";
import { IProductInCart } from "@/app/types/types";
import {
   changeCount,
   removeProduct,
} from "@/lib/slices/cartProductsSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function CartProducts({
   productsInCart,
}: {
   productsInCart: IProductInCart[];
}) {
   const dispatch = useDispatch();
   const handleIncrement = (count: number, slug: string) => {
      dispatch(changeCount({ count: count + 1, slug: slug }));
   };
   const handleDecrement = (count: number, slug: string) => {
      if (count === 1) {
         dispatch(removeProduct(slug));
      }
      dispatch(changeCount({ count: count - 1, slug: slug }));
   };
   return (
      <ul>
         {productsInCart.map((product, index) => {
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
                  <div className="w-full">
                     <h4 className="text-[0.9375rem] font-bold leading-[1.66em]">
                        {product.name}
                     </h4>
                     <p className="font-bold text-sm text-opacity-50 text-custom-black">
                        $ {product.price.toLocaleString()}
                     </p>
                  </div>
                  <IncrementDecrementButton
                     size="smaller"
                     count={product.count}
                     handleDecrement={() =>
                        handleDecrement(product.count, product.slug)
                     }
                     handleIncrement={() =>
                        handleIncrement(product.count, product.slug)
                     }
                  />
               </li>
            );
         })}
      </ul>
   );
}
