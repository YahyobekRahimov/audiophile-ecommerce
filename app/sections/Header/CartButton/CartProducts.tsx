"use client";

import IncrementDecrementButton from "@/app/components/IncrementDecrementButton";
import { IProductInCart } from "@/app/types/types";
import { changeCount } from "@/lib/slices/cartProductsSlice";
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
      dispatch(changeCount({ count: count - 1, slug: slug }));
   };
   return (
      <ul>
         {productsInCart.map((product, index) => {
            return (
               <li key={index}>
                  <Image
                     src={product.image.mobile}
                     alt={product.name}
                     width={64}
                     height={64}
                  />
                  <h4>{product.name}</h4>
                  <IncrementDecrementButton
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
