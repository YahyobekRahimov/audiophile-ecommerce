import Container from "@/app/components/Container";
import GoBack from "@/app/components/GoBack";
import { ProductsType } from "@/app/types/types";
import Image from "next/image";
import ButtonGroup from "./ButtonGroup";
import Button from "@/app/components/Button/Button";
import StoreSection from "@/app/HomeMain/StoreSection";

export async function getData() {
   const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`
   );
   return data.json();
}

export default async function SlugMain({ slug }: { slug: string }) {
   const products: ProductsType = await getData();
   const index = products.findIndex(
      (product) => product.slug === slug
   );

   if (index === -1) {
      return <h1>Product not found</h1>;
   }
   const product = products[index];
   return (
      <main>
         <Container>
            <GoBack className="mb-6 mt-4 lg:mt-20 lg:mb-14" />
         </Container>
         <Container className="md:flex md:items-center md:gap-[4.375rem]">
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
               <h2 className="text-3xl font-bold tracking-[1px] uppercase w-[5rem] mt-10 mb-6 md:w-[20rem]">
                  {product.name}
               </h2>
               <p className="text-[0.9375rem] text-opacity-50 leading-[1.66em] mb-6">
                  {product.description}
               </p>
               <span className="font-bold text-[1.125rem] tracking-[1.286px] uppercase">
                  ${product.price.toLocaleString()}
               </span>
               <ButtonGroup product={product} />
            </div>
         </Container>
         <Container>
            <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-[7rem]">
               <div>
                  <h3 className="text-2xl font-bold tracking-[0.85px] uppercase mt-[5.5rem] mb-6">
                     Features
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.66em] text-opacity-50">
                     {product.features}
                  </p>
               </div>
               <div className="md:grid md:grid-cols-2 md:mt-[5.5rem] md:mb-6 lg:flex lg:flex-col lg:w-full lg:gap-8">
                  <h3 className="text-2xl font-bold tracking-[0.85px] uppercase mt-[5.5rem] mb-6 md:m-0">
                     in the box
                  </h3>
                  <ul>
                     {product.includes.map((item, index) => (
                        <li
                           key={index}
                           className="text-[0.9375rem] leading-[1.66em] text-opacity-50 flex items-center gap-6"
                        >
                           <span className="text-custom-brown font-bold text-[0.9375rem] text-opacity-100">
                              {item.quantity}x
                           </span>
                           {item.item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="flex flex-col mt-[7.5625rem] gap-6 md:grid md:grid-flow-col md:grid-rows-2 md:justify-center">
               <Image
                  src={product.gallery.first.desktop}
                  alt={product.name}
                  width={540}
                  height={560}
                  className="rounded-lg lg:rounded-xl hidden lg:inline-block h-auto w-auto"
               />
               <Image
                  src={product.gallery.first.tablet}
                  alt={product.name}
                  width={281}
                  height={480}
                  className="rounded-lg lg:rounded-xl hidden md:inline-block lg:hidden w-max"
               />
               <Image
                  src={product.gallery.first.mobile}
                  alt={product.name}
                  width={327}
                  height={327}
                  className="rounded-lg lg:rounded-xl md:hidden w-max"
               />
               <Image
                  src={product.gallery.second.desktop}
                  alt={product.name}
                  width={540}
                  height={560}
                  className="rounded-lg lg:rounded-xl hidden lg:inline-block w-max"
               />
               <Image
                  src={product.gallery.second.tablet}
                  alt={product.name}
                  width={281}
                  height={480}
                  className="rounded-lg lg:rounded-xl hidden md:inline-block lg:hidden w-max"
               />
               <Image
                  src={product.gallery.second.mobile}
                  alt={product.name}
                  width={327}
                  height={327}
                  className="rounded-lg lg:rounded-xl md:hidden w-max"
               />
               <Image
                  src={product.gallery.third.desktop}
                  alt={product.name}
                  width={540}
                  height={560}
                  className="row-span-3 h-max rounded-lg lg:rounded-xl hidden lg:inline-block"
               />
               <Image
                  src={product.gallery.third.tablet}
                  alt={product.name}
                  width={281}
                  height={600}
                  className="row-span-3 h-max rounded-lg lg:rounded-xl hidden md:inline-block lg:hidden"
               />
               <Image
                  src={product.gallery.third.mobile}
                  alt={product.name}
                  width={327}
                  height={327}
                  className="row-span-3 h-max rounded-lg lg:rounded-xl md:hidden"
               />
            </div>

            <h3 className="text-2xl font-bold tracking-[0.85px] uppercase mt-[6rem] mb-10">
               you may also like
            </h3>
            <div className="flex flex-col gap-[3.5rem] md:grid md:grid-cols-3 md:gap-3 justify-items-center mb-[10.75rem]">
               {product.others.map((prod, index) => {
                  let otherProduct = products.find(
                     (pr) => pr.slug === prod.slug
                  );
                  return (
                     <div
                        key={index}
                        className="flex flex-col items-center"
                     >
                        <Image
                           src={prod.image.desktop}
                           alt={prod.name}
                           width={540}
                           height={560}
                           className="rounded-lg lg:rounded-xl hidden lg:inline-block"
                        />
                        <Image
                           src={prod.image.tablet}
                           alt={prod.name}
                           width={281}
                           height={480}
                           className="rounded-lg lg:rounded-xl hidden md:inline-block lg:hidden"
                        />
                        <Image
                           src={prod.image.mobile}
                           alt={prod.name}
                           width={327}
                           height={327}
                           className="rounded-lg lg:rounded-xl md:hidden"
                        />
                        <h3 className="text-2xl font-bold tracking-[0.85px] uppercase mt-[2rem] mb-8">
                           {prod.name}
                        </h3>
                        <Button
                           variant="primary"
                           link={`/category/${otherProduct?.category.slice(
                              0,
                              otherProduct.category.length - 1
                           )}/${prod.slug}`}
                        >
                           See Product
                        </Button>
                     </div>
                  );
               })}
            </div>
         </Container>
         <StoreSection />
      </main>
   );
}
