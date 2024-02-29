"use client";

import Link from "next/link";
import styles from "./Button.module.css";
import { CSSProperties, ReactNode } from "react";

export default function Button({
   className,
   style,
   onClick,
   children,
   type = "button",
   variant = "primary",
   link = "",
}: {
   className?: string;
   style?: CSSProperties;
   onClick?: () => void;
   children?: ReactNode;
   type?: "submit" | "button";
   variant?: "primary" | "outlined" | "text";
   link?: string;
}) {
   let classStyles = "";
   if (variant === "primary") {
      classStyles =
         "bg-custom-brown text-white py-[0.9375rem] px-8 hover:bg-custom-pinkOrange";
   } else if (variant === "outlined") {
      classStyles =
         "py-[0.9375rem] px-8 border border-solid border-black text-black hover:text-white hover:bg-black";
   } else {
      classStyles = "gap-[0.5rem] hover:text-custom-brown";
   }

   if (link) {
      return (
         <Link
            href={link}
            className={`flex items-center justify-center uppercase text-[0.8125rem] font-bold duration-200 tracking-[1px] button-parent ${classStyles} ${
               styles["button-parent"]
            } ${className ?? ""}`}
            style={style}
         >
            {children}
            {variant === "text" ? (
               <svg
                  height="20"
                  preserveAspectRatio="xMinYMin"
                  viewBox="-8 -5 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-custom-brown duration-200`}
               >
                  <path d="m5.314 7.071-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1 -1.414-1.414z" />
               </svg>
            ) : (
               ""
            )}
         </Link>
      );
   }
   return (
      <button
         type={type}
         onClick={onClick}
         className={`flex items-center justify-center uppercase text-[0.8125rem] font-bold duration-200 tracking-[1px] button-parent ${classStyles} ${
            styles["button-parent"]
         } ${className ?? ""}`}
         style={style}
      >
         {children}
         {variant === "text" ? (
            <svg
               height="20"
               preserveAspectRatio="xMinYMin"
               viewBox="-8 -5 24 24"
               width="24"
               xmlns="http://www.w3.org/2000/svg"
               className={`fill-custom-brown duration-200`}
            >
               <path d="m5.314 7.071-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1 -1.414-1.414z" />
            </svg>
         ) : (
            ""
         )}
      </button>
   );
}
