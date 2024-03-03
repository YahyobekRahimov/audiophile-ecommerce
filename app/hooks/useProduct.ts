import { useAppSelector } from "@/lib/hooks";

export default function useProduct(slug: string) {
   let data = useAppSelector((state) =>
      state.cartProducts.find((item) => item.slug === slug)
   );

   return data;
}
