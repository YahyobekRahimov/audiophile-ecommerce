"use client";

import { FormEvent, useRef, useState } from "react";
import Container from "../components/Container";
import GoBack from "../components/GoBack";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";
import OrderCompleted from "./OrderCompleted";

export interface IErrors {
   nameError: string;
   emailError: string;
   phoneNumberError: string;
   addressError: string;
   zipCodeError: string;
   cityError: string;
   countryError: string;
   emoneyNumberError: string;
   emoneyPINError: string;
}

const initialErrorsState = {
   nameError: "",
   emailError: "",
   phoneNumberError: "",
   addressError: "",
   zipCodeError: "",
   cityError: "",
   countryError: "",
   emoneyNumberError: "",
   emoneyPINError: "",
};

export default function CheckoutMain() {
   const nameRef = useRef<HTMLInputElement>(null);
   const emailRef = useRef<HTMLInputElement>(null);
   const phoneNumberRef = useRef<HTMLInputElement>(null);
   const addressRef = useRef<HTMLInputElement>(null);
   const zipCodeRef = useRef<HTMLInputElement>(null);
   const cityRef = useRef<HTMLInputElement>(null);
   const countryRef = useRef<HTMLInputElement>(null);
   const emoneyNumberRef = useRef<HTMLInputElement>(null);
   const emoneyPINRef = useRef<HTMLInputElement>(null);

   const [errors, setErrors] = useState<IErrors>(initialErrorsState);
   const [formSuccessful, setFormSuccessful] =
      useState<boolean>(false);

   const references = {
      nameRef,
      emailRef,
      phoneNumberRef,
      addressRef,
      zipCodeRef,
      cityRef,
      countryRef,
      emoneyNumberRef,
      emoneyPINRef,
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Initialize errors object
      let newErrors: IErrors = { ...initialErrorsState };

      // Validation for Name
      if (!nameRef.current?.value) {
         newErrors = { ...newErrors, nameError: "Name is required" };
      }

      // Validation for Email
      if (
         !emailRef.current?.value ||
         !/^\S+@\S+\.\S+$/.test(emailRef.current.value)
      ) {
         newErrors = {
            ...newErrors,
            emailError: "Valid email address is required",
         };
      }

      // Validation for Phone Number
      if (
         !phoneNumberRef.current?.value ||
         !/^\+?[1-9]\d{1,14}$/.test(phoneNumberRef.current.value)
      ) {
         newErrors = {
            ...newErrors,
            phoneNumberError: "Valid phone number is required",
         };
      }

      // Validation for Address
      if (!addressRef.current?.value) {
         newErrors = {
            ...newErrors,
            addressError: "Address is required",
         };
      }

      // Validation for Zip Code
      if (!zipCodeRef.current?.value) {
         newErrors = {
            ...newErrors,
            zipCodeError: "Zip Code is required",
         };
      }

      // Validation for City
      if (!cityRef.current?.value) {
         newErrors = { ...newErrors, cityError: "City is required" };
      }

      // Validation for Country
      if (!countryRef.current?.value) {
         newErrors = {
            ...newErrors,
            countryError: "Country is required",
         };
      }

      // Validation for e-Money Number
      if (!emoneyNumberRef.current?.value) {
         console.log(emoneyNumberRef.current?.value);
         newErrors = {
            ...newErrors,
            emoneyNumberError: "e-Money Number is required",
         };
      }

      // Validation for e-Money PIN
      if (!emoneyPINRef.current?.value) {
         newErrors = {
            ...newErrors,
            emoneyPINError: "e-Money PIN is required",
         };
      }

      // Update errors state
      setErrors(newErrors);

      // Check if there are any errors
      if (Object.values(newErrors).some((error) => error !== "")) {
         // If there are errors, stop form submission
         return;
      }

      // If all validations pass, you can proceed with form submission
      setFormSuccessful(true);
   };

   return (
      <main className="bg-custom-light-grey">
         <Container className="pt-4 pb-6">
            <GoBack />
         </Container>
         <Container className="pb-[15rem]">
            <div className="flex flex-col gap-8 lg:flex-row">
               <CheckoutForm
                  handleSubmit={handleSubmit}
                  references={references}
                  errors={errors}
               />
               {/* @ts-ignore */}
               <Summary handleSubmit={handleSubmit} />
            </div>
         </Container>
         {formSuccessful && (
            <OrderCompleted
               setFormSuccessful={setFormSuccessful}
               formSuccessful={formSuccessful}
            />
         )}
      </main>
   );
}
