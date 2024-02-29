"use client";

import Image from "next/image";
import Container from "../components/Container";
import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";

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
      image: {
         src: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
         width: 120,
         height: 104,
      },
      title: "Headphones",
      buttonTitle: "SHOP",
      link: "/category/headphone",
   },
   {
      image: {
         src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
         width: 120,
         height: 101,
      },
      title: "Speakers",
      buttonTitle: "SHOP",
      link: "/category/speaker",
   },
   {
      image: {
         src: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
         width: 147,
         height: 105,
      },
      title: "Earphones",
      buttonTitle: "SHOP",
      link: "/category/earphone",
   },
];

export default function StoreSection() {
   const router = useRouter();
   return (
      <section>
         <Container className="mt-[4rem] mb-[5.5rem] lg:mt-[10rem]">
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-[4.25rem] md:px-10">
               {menu.map((item, index) => (
                  <div
                     className="bg-custom-grey flex flex-col items-center justify-between h-[10.25rem] relative rounded-lg"
                     key={index}
                  >
                     <Image
                        src={item.image.src}
                        alt={item.title}
                        width={item.image.width}
                        height={item.image.height}
                        className="absolute top-0 translate-y-[-35%] lg:translate-y-[-40%] lg:hidden"
                     />
                     <Image
                        src={item.image.src}
                        alt={item.title}
                        width={item.image.width + 20}
                        height={item.image.height}
                        className="absolute top-0 translate-y-[-35%] lg:translate-y-[-40%] hidden lg:inline-block"
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
                        className="pb-5"
                     >
                        {item.buttonTitle}
                     </Button>
                  </div>
               ))}
            </div>
         </Container>
      </section>
   );
}
