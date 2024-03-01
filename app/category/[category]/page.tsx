import Footer from "@/app/sections/Footer/Footer";
import Header from "@/app/sections/Header/Header";
import CategoryMain from "./CategoryMain/CategoryMain";
import Divider from "@/app/components/Divider";
import StoreSection from "@/app/HomeMain/StoreSection";

export default function page({
   params,
}: {
   params: { category: string };
}) {
   return (
      <>
         <Header />
         <Divider direction="horizontal" />
         <CategoryMain category={params.category} />
         <StoreSection />
         <Footer />
      </>
   );
}
