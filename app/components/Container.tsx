import { ReactNode } from "react";

export default function Container({
   children,
   className,
}: {
   children?: ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`mx-auto w-full px-6 md:px-10 xl:px-40 ${
            className ?? ""
         }`}
      >
         {children}
      </div>
   );
}
