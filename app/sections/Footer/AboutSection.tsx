import Container from "@/app/components/Container";
import Image from "next/image";

export default function AboutSection() {
   return (
      <section>
         <Container className="py-[7.5rem] lg:flex lg:flex-row-reverse gap-[7.8125rem] ">
            <Image
               src="/assets/shared/desktop/image-best-gear.jpg"
               alt="best gear"
               width={1950}
               height={1300}
               className="rounded-lg hidden lg:inline-block"
            />
            <Image
               src="/assets/shared/tablet/image-best-gear.jpg"
               alt="best gear"
               width={1950}
               height={1300}
               className="rounded-lg hidden md:inline-block lg:hidden"
            />
            <Image
               src="/assets/shared/mobile/image-best-gear.jpg"
               alt="best gear"
               width={1950}
               height={1300}
               className="rounded-lg md:hidden"
            />
            <div>
               <h2 className="text-3xl uppercase tracking-[1px] font-bold mt-10 mb-8 text-center lg:w-[60%] lg:text-start">
                  Bringing you the{" "}
                  <span className="text-custom-brown">best</span>{" "}
                  audio gear
               </h2>
               <p className="text-[0.9375rem] text-custom-black text-opacity-50 leading-[1.66em] text-center lg:text-start">
                  Located at the heart of New York City, Audiophile is
                  the premier store for high end headphones,
                  earphones, speakers, and audio accessories. We have
                  a large showroom and luxury demonstration rooms
                  available for you to browse and experience a wide
                  range of our products. Stop by our store to meet
                  some of the fantastic people who make Audiophile the
                  best place to buy your portable audio equipment.
               </p>
            </div>
         </Container>
      </section>
   );
}
