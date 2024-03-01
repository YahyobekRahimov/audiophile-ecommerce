import Container from "@/app/components/Container";
import GoBack from "@/app/components/GoBack";
import IncrementDecrementButton from "@/app/components/IncrementDecrementButton";
import { ProductsType } from "@/app/types/types";
import Image from "next/image";

export async function getData() {
   const data = await fetch(`${process.env.baseURL}/api/products`);
   return data.json();
}

export default async function SlugMain({ slug }: { slug: string }) {
   const products: ProductsType = await getData();
   const index = products.findIndex(
      (product) => product.slug === slug
   );
   const product = products[index];
   return (
      <main>
         <Container className="mt-4 lg:mt-20">
            <GoBack className="mb-6 lg:mb-14" />
            <Image
               src={product.image.desktop}
               alt={product.name}
               width={540}
               height={560}
               className="rounded-lg lg:rounded-xl hidden lg:inline-block"
            />
            <Image
               src={product.image.tablet}
               alt={product.name}
               width={281}
               height={480}
               className="rounded-lg lg:rounded-xl hidden md:inline-block lg:hidden"
            />
            <Image
               src={product.image.mobile}
               alt={product.name}
               width={327}
               height={327}
               className="rounded-lg lg:rounded-xl md:hidden"
            />
            <div>
               <h2 className="text-3xl font-bold tracking-[1px] uppercase w-[5rem] mt-10 mb-6">
                  {product.name}
               </h2>
               <p className="text-[0.9375rem] text-opacity-50 leading-[1.66em] mb-6">
                  {product.description}
               </p>
               <span className="font-bold text-[1.125rem] tracking-[1.286px] uppercase">
                  ${product.price}
               </span>
               {/* <IncrementDecrementButton count={0} /> */}
            </div>
         </Container>
      </main>
   );
}
