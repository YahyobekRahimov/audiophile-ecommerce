"use client";

import Button from "@/app/components/Button/Button";
import Container from "@/app/components/Container";
import HamburgerIcon from "@/app/components/IconComponents/HamburgerIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IMenuItem {
   image: {
      src: string;
      width: number;
      height: number;
   };
   title: string;
   buttonTitle: string;
   link: string;
}

const menu: IMenuItem[] = [
   {
      image: { src: "/images/headphone.png", width: 79, height: 104 },
      title: "Headphones",
      buttonTitle: "SHOP",
      link: "/category/headphones",
   },
   {
      image: { src: "/images/speaker.png", width: 84, height: 101 },
      title: "Speakers",
      buttonTitle: "SHOP",
      link: "/category/speakers",
   },
   {
      image: {
         src: "/images/earphone.png",
         width: 147,
         height: 133,
      },
      title: "Earphones",
      buttonTitle: "SHOP",
      link: "/category/earphones",
   },
];

export default function MobileNavMenu() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const router = useRouter();
   return (
      <>
         <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
         </button>
         <div
            className={`absolute z-20 w-screen bottom-0 left-0 bg-white h-max pt-[5.25rem] pb-[2.1875rem] translate-y-[100%] duration-300`}
            style={
               !isOpen
                  ? { transform: "translateY(-100%)" }
                  : { transform: "translateY(100%)" }
            }
         >
            <Container className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-[4.25rem]">
               {menu.map((item, index) => (
                  <div
                     className="bg-custom-grey flex flex-col items-center h-[10.25rem] relative"
                     key={index}
                  >
                     <Image
                        src={item.image.src}
                        alt={item.title}
                        width={item.image.width}
                        height={item.image.height}
                        className="absolute top-0 translate-y-[-50%]"
                     />
                     <h2
                        style={{
                           marginTop: (item.image.height / 3) * 2,
                        }}
                        className="uppercase text-black text-[0.9375rem] tracking-[1px] mb-[1rem] font-bold"
                     >
                        {item.title}
                     </h2>
                     <Button
                        variant="text"
                        onClick={() => router.push(item.link)}
                     >
                        {item.buttonTitle}
                     </Button>
                  </div>
               ))}
            </Container>
         </div>
         <div
            onClick={() => setIsOpen(false)}
            className={`absolute z-10 bg-black bottom-0 translate-y-[100%] left-0 opacity-50 w-screen h-screen ${
               isOpen ? "" : "hidden"
            }`}
         ></div>
      </>
   );
}
