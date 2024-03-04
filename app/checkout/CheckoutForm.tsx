"use client";

import { FormEvent, RefObject } from "react";
import Container from "../components/Container";
import Input from "../components/Input/Input";
import RadioGroup, {
   IRadio,
} from "../components/RadioGroup/RadioGroup";
import { IErrors } from "./CheckoutMain";

interface IRadioGroupData {
   defaultValue: string;
   radio: IRadio[];
}

const radioGroupData: IRadioGroupData = {
   defaultValue: "e-money",
   radio: [
      {
         id: "e-money",
         label: "E-Money",
         value: "e-money",
      },
      {
         id: "cash",
         label: "Cash on Delivery",
         value: "cash",
      },
   ],
};

interface FormRefs {
   nameRef: RefObject<HTMLInputElement>;
   emailRef: RefObject<HTMLInputElement>;
   phoneNumberRef: RefObject<HTMLInputElement>;
   addressRef: RefObject<HTMLInputElement>;
   zipCodeRef: RefObject<HTMLInputElement>;
   cityRef: RefObject<HTMLInputElement>;
   countryRef: RefObject<HTMLInputElement>;
   emoneyNumberRef: RefObject<HTMLInputElement>;
   emoneyPINRef: RefObject<HTMLInputElement>;
}

export default function CheckoutForm({
   handleSubmit,
   references,
   errors,
}: {
   handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
   references: FormRefs;
   errors: IErrors;
}) {
   return (
      <div className="bg-white p-6 rounded-lg lg:w-full">
         <h2 className="uppercase font-bold text-[1.75rem] leading-normal tracking-[1px]">
            Checkout
         </h2>
         <form onSubmit={handleSubmit}>
            <div>
               <h3 className="uppercase text-custom-brown tracking-[1px] text-[0.8125rem] font-bold leading-[1.92em] mt-[2rem] mb-[1rem]">
                  Billing details
               </h3>
               <div className="flex flex-col gap-6 md:grid grid-cols-2">
                  <Input
                     placeholder="Alexei Ward"
                     label="Name"
                     id="name"
                     key="name"
                     type="text"
                     inputRef={references.nameRef}
                     error={errors.nameError}
                  />
                  <Input
                     type="email"
                     placeholder="alexei@gmail.com"
                     label="Email Address"
                     id="email"
                     key="email"
                     inputRef={references.emailRef}
                     error={errors.emailError}
                  />
                  <Input
                     type="tel"
                     placeholder="+1 202-555-0136"
                     label="Phone Number"
                     id="phoneNumber"
                     key="phoneNumber"
                     inputRef={references.phoneNumberRef}
                     error={errors.phoneNumberError}
                  />
               </div>
               <h3 className="uppercase text-custom-brown tracking-[1px] text-[0.8125rem] font-bold leading-[1.92em] mt-[2rem] mb-[1rem]">
                  shipping info
               </h3>
               <div className="flex flex-col gap-6 md:grid grid-cols-2">
                  <Input
                     type="text"
                     placeholder="1137 Williams Avenue"
                     label="Your Address"
                     id="address"
                     key="address"
                     inputRef={references.addressRef}
                     error={errors.addressError}
                  />
                  <Input
                     type="text"
                     placeholder="10001"
                     label="Zip Code"
                     id="zipCode"
                     key="zipCode"
                     inputRef={references.zipCodeRef}
                     error={errors.zipCodeError}
                  />
                  <Input
                     type="text"
                     placeholder="New York"
                     label="City"
                     id="city"
                     key="city"
                     inputRef={references.cityRef}
                     error={errors.cityError}
                  />
                  <Input
                     type="text"
                     placeholder="United States"
                     label="Country"
                     id="country"
                     key="country"
                     inputRef={references.countryRef}
                     error={errors.countryError}
                  />
               </div>
               <h3 className="uppercase text-custom-brown tracking-[1px] text-[0.8125rem] font-bold leading-[1.92em] mt-[2rem] mb-[1rem]">
                  Payment details
               </h3>
               <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                  <div className="md:col-span-3 md:grid md:grid-cols-2">
                     <div className="text-custom-black opacity-100 font-bold">
                        Payment method:
                     </div>
                     <RadioGroup data={radioGroupData} />
                  </div>
                  <Input
                     type="number"
                     placeholder="238521993"
                     label="e-Money Number"
                     id="emoneyNumber"
                     key="eMoneyNumber"
                     error={errors.emoneyNumberError}
                  />
                  <Input
                     type="number"
                     placeholder="6891"
                     label="e-Money PIN"
                     id="eMoneyPIN"
                     key="eMoneyPIN"
                     error={errors.emoneyPINError}
                  />
               </div>
            </div>
         </form>
      </div>
   );
}
