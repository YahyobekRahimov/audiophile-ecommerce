import Container from "@/app/components/Container";
import { ProductsType } from "@/app/types/types";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

export async function getData() {
   const res = await fetch(`${process.env.baseURL}/api/products`);
   const data = await res.json();
   return data;
}

export default async function CategoryMain({
   category,
}: {
   category: string;
}) {
   const data: ProductsType = await getData();
   const products: ProductsType = data.filter((product) => {
      return product.category === category + "s";
   });
   return (
      <main>
         <section className="bg-custom-black-800">
            <Container className="py-8">
               <h1 className="uppercase font-bold text-white text-3xl text-center tracking-[2px]">
                  {category + "s"}
               </h1>
            </Container>
         </section>
         <section>
            <Container>
               <div>
                  {products.map((product, index) => (
                     <div
                        key={index}
                        className={`mt-16 mb-[7.5rem] lg:flex lg:gap-[10rem] lg:items-center ${
                           index % 2 === 1
                              ? "lg:flex-row-reverse"
                              : ""
                        }`}
                     >
                        <Image
                           src={product.categoryImage.desktop}
                           alt={product.name}
                           width={349}
                           height={386}
                           className="w-full rounded-lg h-auto hidden lg:inline-block"
                        />
                        <Image
                           src={product.categoryImage.tablet}
                           alt={product.name}
                           width={220}
                           height={243}
                           className="w-full rounded-lg h-auto hidden md:inline-block lg:hidden"
                        />
                        <Image
                           src={product.categoryImage.mobile}
                           alt={product.name}
                           width={220}
                           height={243}
                           className="w-full rounded-lg h-auto md:hidden"
                        />
                        <div className="pt-8 flex flex-col gap-6 text-center items-center lg:text-start lg:items-start">
                           {product.new && (
                              <p className="uppercase tracking-[10px] text-sm text-custom-brown">
                                 New product
                              </p>
                           )}
                           <h2 className="text-custom-black text-3xl font-bold tracking-[1px]">
                              {product.name}
                           </h2>
                           <p className="text-custom-black text-opacity-50 leading-[1.6em] text-[0.9375rem]">
                              {product.description}
                           </p>
                           <Button
                              variant="primary"
                              link={`/category/${category}/${product.slug}`}
                           >
                              See product
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
      </main>
   );
}
