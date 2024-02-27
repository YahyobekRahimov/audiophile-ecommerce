"use client";

import { CSSProperties, ReactNode } from "react";

export default function Button({
   className,
   style,
   onClick,
   children,
   type = "button",
   variant = "primary",
}: {
   className?: string;
   style?: CSSProperties;
   onClick?: () => void;
   children?: ReactNode;
   type?: "submit" | "button";
   variant?: "primary" | "outlined" | "text";
}) {
   let styles = "";
   if (variant === "primary") {
      styles = "";
   } else if (variant === "outlined") {
      styles = "";
   } else {
      styles = "";
   }

   return (
      <button
         type={type}
         onClick={onClick}
         className={` ${styles} ${className}`}
         style={style}
      >
         {children}
      </button>
   );
}
