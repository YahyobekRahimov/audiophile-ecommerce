"use client";

import Button from "@/app/components/Button/Button";
import IncrementDecrementButton from "@/app/components/IncrementDecrementButton";
import { ProductType } from "@/app/types/types";
import { useAppSelector } from "@/lib/hooks";
import {
   addProductToCart,
   changeCount,
} from "@/lib/slices/cartProductsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ButtonGroup({
   product,
}: {
   product: ProductType;
}) {
   const [count, setCount] = useState<number>(getCount(product.slug));
   const dispatch = useDispatch();
   const [addedToCart, setAddedToCart] = useState<boolean>(
      useAppSelector((state) =>
         state.cartProducts.some((pro) => pro.slug === product.slug)
      )
   );
   const handleAddToCart = () => {
      setAddedToCart(true);
      dispatch(addProductToCart({ ...product, count }));
   };

   function getCount(slug: string) {
      const productFromCart = useAppSelector((state) =>
         state.cartProducts.find((pro) => pro.slug === slug)
      );
      if (productFromCart) {
         return productFromCart.count;
      }
      return 1;
   }

   const handleIncrement = () => {
      setCount(count + 1);
      if (addedToCart) {
         dispatch(
            changeCount({ slug: product.slug, count: count + 1 })
         );
      }
   };
   const handleDecrement = () => {
      if (count === 1) {
         return;
      }
      setCount(count - 1);
      if (addedToCart) {
         dispatch(
            changeCount({ slug: product.slug, count: count - 1 })
         );
      }
   };

   return (
      <div className="flex gap-4 mt-[2rem]">
         <IncrementDecrementButton
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
         />
         {addedToCart ? (
            <Button variant="outlined">Jump to checkout</Button>
         ) : (
            <Button onClick={handleAddToCart} variant="primary">
               ADD TO CART
            </Button>
         )}
      </div>
   );
}
