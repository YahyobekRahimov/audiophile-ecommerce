import Image from "next/image";
import Container from "./components/Container";
import Button from "./components/Button/Button";

export default function HomeMain() {
   return (
      <main>
         <section className="text-white max-h-[1250px] h-screen">
            <div className="absolute overflow-hidden z-[-1]">
               <div className="overflow-hidden">
                  <Image
                     src="/images/hero-background.png"
                     alt="Headphone"
                     width={1000}
                     height={1250}
                     className="scale-150 mt-10"
                  />
               </div>
            </div>
            <Container className="flex flex-col justify-center items-center md:h-screen mt-[-10rem]">
               <div className="flex flex-col items-center md:max-w-[25rem] md:max-h-screen">
                  <h2 className="tracking-[10px] uppercase opacity-50 mb-4 mt-[6.75rem] md:text-[0.875rem]">
                     new product
                  </h2>
                  <h1 className="mb-6 text-4xl tracking-[1.286px] font-bold text-center uppercase md:text-[3.5rem] md:leading-[1.11em]">
                     XX99 Mark II HeadphoneS
                  </h1>
                  <p className="mb-7 text-[1rem] leading-[1.66em] opacity-75 text-center">
                     Experience natural, lifelike audio and
                     exceptional build quality made for the passionate
                     music enthusiast.
                  </p>
                  <Button>see product</Button>
               </div>
            </Container>
         </section>
      </main>
   );
}
