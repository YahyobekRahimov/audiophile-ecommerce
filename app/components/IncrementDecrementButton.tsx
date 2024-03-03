"use client";

import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function IncrementDecrementButton({
   handleDecrement,
   handleIncrement,
   count,
}: {
   handleDecrement: any;
   handleIncrement: any;
   count: number;
}) {
   return (
      <div className="text-center font-bold uppercase text-[0.8125rem] flex items-center bg-custom-grey w-max">
         <button
            className="text-opacity-25 px-4 py-[0.9375rem]"
            onClick={handleDecrement}
         >
            -
         </button>
         <span className="px-4 py-[0.9375rem]">{count}</span>
         <button
            className="text-opacity-25 px-4 py-[0.9375rem]"
            onClick={handleIncrement}
         >
            +
         </button>
      </div>
   );
}
