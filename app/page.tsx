import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RadioGroup from "./components/RadioGroup/RadioGroup";

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
      <div className="flex min-h-screen justify-center items-center">
         <Button variant="primary">Shop</Button>
         <Input placeholder="something" />
         <RadioGroup data={radioGroup} />
      </div>
   );
}
