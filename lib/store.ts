import { configureStore } from "@reduxjs/toolkit";
import cartProductsSlice from "./slices/cartProductsSlice";

export const makeStore = () => {
   const store = configureStore({
      reducer: {
         cartProducts: cartProductsSlice,
      },
   });

   store.subscribe(() => {
      console.log(store.getState());
   });

   return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<AppStore["dispatch"]>;
