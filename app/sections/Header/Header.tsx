"use client";
import Container from "@/app/components/Container";
import Logo from "@/app/components/IconComponents/Logo";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";
import CartButton from "./CartButton/CartButton";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useEffect, useState } from "react";

export default function Header() {
   const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         if (scrollPosition > 0) {
            setIsHeaderFixed(true);
         } else {
            setIsHeaderFixed(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on unmount
      return () => {
         window.removeEventListener("scroll", handleScroll);
         document.body.style.overflow = "auto";
      };
   }, []);
   return (
      <header
         className={`bg-custom-black-900 ${
            isHeaderFixed
               ? "fixed top-0 left-0 z-20 w-full bg-opacity-70 backdrop-blur-lg"
               : ""
         }`}
      >
         <Container
            className={`flex items-center justify-between py-8 relative duration-200 ${
               isHeaderFixed ? "py-4" : ""
            }`}
         >
            <MobileNavMenu />
            <Link href="/">
               <Logo />
            </Link>
            <DesktopNav />
            <CartButton />
         </Container>
      </header>
   );
}
