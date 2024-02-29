import HomeMain from "./HomeMain/HomeMain";
import Divider from "./components/Divider";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";

const radioGroup = {
   defaultValue: "e-money",
   radio: [
      {
         id: 1,
         label: "E-money",
         value: "e-money",
      },
      {
         id: 2,
         label: "Cash on Delivery",
         value: "cash-on-delivery",
      },
   ],
};
export default function Home() {
   return (
      <>
         <Header />
         <Divider
            direction="horizontal"
            style={{
               backgroundColor: "#2D2D2D",
            }}
         />
         <HomeMain />
         <Footer />
      </>
   );
}
