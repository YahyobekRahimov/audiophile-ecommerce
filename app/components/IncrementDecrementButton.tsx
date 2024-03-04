"use client";

export default function IncrementDecrementButton({
   handleDecrement,
   handleIncrement,
   count,
   size,
}: {
   handleDecrement: any;
   handleIncrement: any;
   count: number;
   size?: "smaller";
}) {
   return (
      <div className="text-center font-bold uppercase text-[0.8125rem] flex items-center bg-custom-grey w-max">
         <button
            className={`text-opacity-25 px-4 py-[0.9375rem] ${
               size == "smaller" && "px-3 py-[0.70rem]"
            }`}
            onClick={handleDecrement}
         >
            -
         </button>
         <span
            className={`px-4 py-[0.9375rem] ${
               size == "smaller" && "px-3 py-[0.70rem]"
            }`}
         >
            {count}
         </span>
         <button
            className={`text-opacity-25 px-4 py-[0.9375rem] ${
               size == "smaller" && "px-3 py-[0.70rem]"
            }`}
            onClick={handleIncrement}
         >
            +
         </button>
      </div>
   );
}
