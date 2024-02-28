import { CSSProperties } from "react";

export default function Divider({
   direction,
   className,
   style,
}: {
   direction: "vertical" | "horizontal";
   className?: string;
   style?: CSSProperties;
}) {
   return (
      <div
         className={` ${
            direction === "vertical"
               ? "w-[1px] h-full"
               : "h-[1px] w-full"
         } ${className ?? ""}`}
         style={style}
      ></div>
   );
}
