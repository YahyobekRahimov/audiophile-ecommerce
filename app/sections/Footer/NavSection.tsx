import Container from "@/app/components/Container";
import Logo from "@/app/components/IconComponents/Logo";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function NavSection() {
   return (
      <section className="bg-custom-black-800 relative">
         <Container className="relative">
            <div className="w-[101px] h-1 bg-custom-brown absolute top-0 left-[50%] translate-x-[-50%] md:left-10 md:translate-x-0 xl:left-40"></div>
         </Container>
         <Container className="pt-[3rem] pb-10">
            <div className="flex items-center flex-col gap-[3rem] md:items-start xl:flex-row xl:justify-between">
               <Logo />
               <ul className="uppercase text-center flex flex-col gap-4 md:flex-row md:gap-[2rem]">
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/"
                     >
                        home
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/headphone"
                     >
                        headphones
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/speaker"
                     >
                        speakers
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/earphone"
                     >
                        earphones
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="text-white text-opacity-50 flex flex-col items-center gap-[3rem] text-center mt-[3rem] md:text-start md:flex-row md:flex-wrap md:justify-between">
               <div className="text-[0.9375rem] leading-[1.66em] w-full xl:flex xl:items-end xl:justify-between">
                  <p className="xl:w-[50%]">
                     Audiophile is an all in one stop to fulfill your
                     audio needs. We're a small team of music lovers
                     and sound specialists who are devoted to helping
                     you get the most out of personal audio. Come and
                     visit our demo facility - we're open 7 days a
                     week.
                  </p>
                  <SocialLinks className="hidden xl:flex xl:flex-row" />
               </div>
               <p className="font-bold">
                  Copyright 2021. All Rights Reserved
               </p>
               <SocialLinks className="xl:hidden" />
            </div>
         </Container>
      </section>
   );
}
