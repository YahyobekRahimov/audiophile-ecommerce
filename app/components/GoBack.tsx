"use client";
import { useRouter } from "next/navigation";

export default function GoBack({
   className,
}: {
   className?: string;
}) {
   const router = useRouter();
   return (
      <button
         onClick={() => router.back()}
         className={`text-custom-black text-[0.9375rem] leading-[1.66em] text-opacity-50 ${
            className ?? ""
         }`}
      >
         Go Back
      </button>
   );
}
