import Image from "next/image";
import Button from "../components/Button/Button";
import Container from "../components/Container";

export default function HeroSection() {
   return (
      <section className="text-white overflow-hidden relative min-h-[80vh] md:bg-custom-black-900 z-[0]">
         <div className="absolute overflow-hidden z-[-1]">
            <div className="overflow-hidden">
               <Image
                  src="/images/hero-background.png"
                  alt="Headphone"
                  width={500}
                  height={1250}
                  className="scale-150 mt-10 z-50 w-screen xl:hidden md:scale-100 md:mt-[-10rem] lg:scale-[60%] lg:mt-[-25rem]"
               />
            </div>
         </div>
         <Container className="flex flex-col justify-center items-center md:h-screen sm:pt-[10rem] md:mt-[-15rem] xl:grid xl:grid-cols-2 xl:bg-custom-black-900 xl:h-screen">
            <div className="flex flex-col items-center md:max-w-[25rem] sm:max-w-[24rem] md:max-h-screen">
               <h2 className="tracking-[10px] uppercase opacity-50 mb-4 mt-[6.75rem] md:text-[0.875rem]">
                  new product
               </h2>
               <h1 className="mb-6 text-4xl tracking-[1.286px] font-bold text-center uppercase md:text-[3.5rem] md:leading-[1.11em]">
                  XX99 Mark II HeadphoneS
               </h1>
               <p className="mb-7 text-[1rem] leading-[1.66em] opacity-75 text-center">
                  Experience natural, lifelike audio and exceptional
                  build quality made for the passionate music
                  enthusiast.
               </p>
               <Button link="/category/headphones/xx99-mark-two-headphones">
                  see product
               </Button>
            </div>
            <div className="overflow-hidden">
               <Image
                  src="/images/hero-background.png"
                  alt="Headphone"
                  width={500}
                  height={600}
                  className="hidden xl:inline-block xl:scale-150 xl:mt-[10rem]"
               />
            </div>
         </Container>
      </section>
   );
}
