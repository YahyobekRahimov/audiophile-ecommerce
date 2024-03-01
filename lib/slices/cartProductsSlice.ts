import { ProductsType } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductsType = [
   {
      id: 1,
      name: "",
      category: "",
      categoryImage: {
         desktop: "",
         mobile: "",
         tablet: "",
      },
      description: "",
      features: "",
      gallery: {
         first: { desktop: "", mobile: "", tablet: "" },
         second: { desktop: "", mobile: "", tablet: "" },
         third: { desktop: "", mobile: "", tablet: "" },
      },
      image: { desktop: "", mobile: "", tablet: "" },
      includes: [],
      new: true,
      others: [],
      price: 212,
      slug: "",
   },
];

const cartProductsSlice = createSlice({
   name: "cart products slice",
   initialState,
   reducers: {},
});
