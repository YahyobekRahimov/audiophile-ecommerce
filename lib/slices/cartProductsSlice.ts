import { IProductInCart } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductInCart[] = [];

const cartProductsSlice = createSlice({
   name: "cart products slice",
   initialState,
   reducers: {
      addProductToCart: (
         state,
         { payload }: { payload: IProductInCart }
      ) => {
         state.push(payload);
      },
      removeProduct: (state, { payload }: { payload: string }) => {
         const index = state.findIndex(
            (product) => product.slug === payload
         );
         if (index !== -1) {
            state.splice(index, 1);
         }
      },
      changeCount: (
         state,
         { payload }: { payload: { slug: string; count: number } }
      ) => {
         const index = state.findIndex(
            (product) => product.slug === payload.slug
         );
         if (index !== -1) {
            state[index].count = payload.count;
         }
      },
   },
});

export default cartProductsSlice.reducer;

export const { addProductToCart, removeProduct, changeCount } =
   cartProductsSlice.actions;
