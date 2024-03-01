import { CSSProperties } from "react";
import Container from "./Container";

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
      <section className="bg-custom-black-800">
         <Container className="relative">
            <div
               className={` ${
                  direction === "vertical"
                     ? "w-[1px] h-full"
                     : "h-[1px] w-full"
               } ${className ?? ""}`}
               style={style}
            ></div>
         </Container>
      </section>
   );
}
