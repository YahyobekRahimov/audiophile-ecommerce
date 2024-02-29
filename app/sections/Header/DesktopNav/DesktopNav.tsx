import Link from "next/link";

export default function DesktopNav() {
   return (
      <nav className="hidden lg:block">
         <ul className="flex gap-8">
            <li>
               <Link
                  className="uppercase text-[0.8125rem] font-bold leading-[1.92em] tracking-[2px] text-custom-white hover:text-custom-brown duration-200"
                  href="/"
               >
                  Home
               </Link>
            </li>
            <li>
               <Link
                  className="uppercase text-[0.8125rem] font-bold leading-[1.92em] tracking-[2px] text-custom-white hover:text-custom-brown duration-200"
                  href="/category/headphone"
               >
                  Headphones
               </Link>
            </li>
            <li>
               <Link
                  className="uppercase text-[0.8125rem] font-bold leading-[1.92em] tracking-[2px] text-custom-white hover:text-custom-brown duration-200"
                  href="/category/speaker"
               >
                  Speakers
               </Link>
            </li>
            <li>
               <Link
                  className="uppercase text-[0.8125rem] font-bold leading-[1.92em] tracking-[2px] text-custom-white hover:text-custom-brown duration-200"
                  href="/category/earphone"
               >
                  Earphones
               </Link>
            </li>
         </ul>
      </nav>
   );
}
