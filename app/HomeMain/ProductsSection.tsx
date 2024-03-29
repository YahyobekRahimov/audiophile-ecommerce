import Image from "next/image";
import Container from "../components/Container";
import Button from "../components/Button/Button";

export default function ProductsSection() {
   return (
      <Container className="flex flex-col gap-6 md:gap-8 xl:gap-12">
         <div className="bg-custom-brown px-6 py-14 flex flex-col items-center text-center gap-6 overflow-hidden rounded-lg">
            <div className="relative">
               <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="Speaker"
                  width={172}
                  height={207}
                  className=""
               />
               <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[17.5rem] w-[17.5rem] md:h-[30rem] md:w-[30rem] border border-white border-solid rounded-full opacity-40"></div>
               <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] border border-white border-solid rounded-full opacity-40"></div>
               <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[34.875rem] w-[34.875rem] md:h-[48rem] md:w-[48rem] border border-white border-solid rounded-full opacity-40"></div>
            </div>
            <h2 className="text-custom-white font-bold text-4xl tracking-[1.286px] uppercase mt-2 md:w-[10rem] md:text-center">
               ZX9 SPEAKER
            </h2>
            <p className="text-[0.9375rem] opacity-75 text-white md:w-[20rem] md:text-center">
               Upgrade to premium speakers that are phenomenally built
               to deliver truly remarkable sound.
            </p>
            <Button
               link="/category/speaker"
               variant="outlined"
               className="z-10"
            >
               See product
            </Button>
         </div>
         <div className="relative flex items-center min-h-[23.125rem] rounded-lg overflow-hidden lg:items-start">
            <div className="flex flex-col gap-8 h-full p-6 w-full lg:justify-center lg:items-start lg:pt-20">
               <h2 className="text-[1.75rem] font-bold tracking-[2px] uppercase">
                  ZX7 SPEAKER
               </h2>
               <Button
                  link="/category/speaker"
                  className="w-max"
                  variant="outlined"
               >
                  See product
               </Button>
            </div>
            <Image
               src="/assets/home/mobile/image-speaker-zx7.jpg"
               alt="speaker zx7"
               width={529}
               height={367}
               className="absolute top-0 left-0 z-[-1] md:hidden"
            />
            <Image
               src="/assets/home/desktop/image-speaker-zx7.jpg"
               alt="speaker zx7"
               width={529}
               height={367}
               className="absolute top-0 left-0 z-[-1] hidden lg:inline-block w-full"
            />
            <Image
               src="/assets/home/tablet/image-speaker-zx7.jpg"
               alt="speaker zx7"
               width={529}
               height={367}
               className="absolute top-0 left-0 z-[-1] hidden md:inline-block lg:hidden w-full"
            />
         </div>
         <div className="flex flex-col gap-6 md:flex-row md:gap-3">
            <div className="overflow-hidden rounded-lg">
               <Image
                  src="/assets/home/desktop/image-earphones-yx1.jpg"
                  alt="earphone yx1"
                  width={731}
                  height={919}
                  className="hidden lg:inline-block"
               />
               <Image
                  src="/assets/home/mobile/image-earphones-yx1.jpg"
                  alt="earphone yx1"
                  width={999}
                  height={1255}
                  className="md:hidden w-full"
               />
               <Image
                  src="/assets/home/tablet/image-earphones-yx1.jpg"
                  alt="earphone yx1"
                  width={999}
                  height={1255}
                  className="hidden md:inline-block lg:hidden w-[100%]"
               />
            </div>
            <div className="bg-custom-grey rounded-lg py-10 pl-6 pr-14 md:flex md:flex-col md:justify-center md:items-center lg:w-[70%] lg:items-start lg:pl-24">
               <h2 className="text-[1.75rem] font-bold tracking-[2px] uppercase mb-8">
                  YX1 EARPHONES
               </h2>
               <Button
                  variant="outlined"
                  className="w-max"
                  link="/category/earphone/"
               >
                  See product
               </Button>
            </div>
         </div>
      </Container>
   );
}
