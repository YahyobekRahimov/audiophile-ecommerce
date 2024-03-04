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
      link: "/category/headphone",
   },
   {
      image: { src: "/images/speaker.png", width: 84, height: 101 },
      title: "Speakers",
      buttonTitle: "SHOP",
      link: "/category/speaker",
   },
   {
      image: {
         src: "/images/earphone.png",
         width: 147,
         height: 133,
      },
      title: "Earphones",
      buttonTitle: "SHOP",
      link: "/category/earphone",
   },
];

export default function MobileNavMenu() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const router = useRouter();
   const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
   };
   const handleClose = () => {
      setIsOpen(false);

      document.body.style.overflow = "auto";
   };

   const handleHamburgerClick = () => {
      if (isOpen) {
         handleClose();
      } else {
         handleOpen();
      }
   };
   return (
      <div className="lg:hidden">
         <button onClick={handleHamburgerClick}>
            <HamburgerIcon />
         </button>
         <div
            className={`absolute z-20 w-screen bottom-0 left-0 bg-white h-max pt-[5.25rem] transition-all translate-y-[-30%] pb-[2.1875rem] duration-300 overflow-y-scroll max-h-[80vh]`}
            style={
               !isOpen
                  ? { transform: "translateY(-30%)", opacity: "0" }
                  : { transform: "translateY(100%)", opacity: "1" }
            }
         >
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-[4.25rem] md:px-10">
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
            </div>
         </div>
         <div
            onClick={handleClose}
            className={`absolute z-10 bg-black bottom-0 translate-y-[100%] left-0 opacity-50 w-screen h-screen ${
               isOpen ? "" : "hidden"
            }`}
         ></div>
      </div>
   );
}
