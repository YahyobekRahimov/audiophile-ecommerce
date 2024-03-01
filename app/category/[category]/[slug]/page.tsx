import Footer from "@/app/sections/Footer/Footer";
import Header from "@/app/sections/Header/Header";
import SlugMain from "./SlugMain/SlugMain";

export default function page({
   params,
}: {
   params: { slug: string; category: string };
}) {
   return (
      <>
         <Header />
         <SlugMain slug={params.slug} />
         <Footer />
      </>
   );
}
