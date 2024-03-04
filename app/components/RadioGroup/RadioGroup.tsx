"use client";

import { Label } from "@/components/ui/label";
import {
   RadioGroup as RadioButtonsGroup,
   RadioGroupItem as RadioButton,
} from "@/components/ui/radio-group";
import { useState } from "react";

export interface IRadio {
   label: string;
   value: string;
   id: string | number;
}

export default function RadioGroup({
   data,
}: {
   data: { defaultValue: string; radio: IRadio[] };
}) {
   const [value, setValue] = useState<string>(data.defaultValue);
   const handleValueChange = (value: string) => {
      setValue(value);
   };
   return (
      <RadioButtonsGroup
         onValueChange={handleValueChange}
         value={value}
      >
         {data.radio.map((radio) => (
            <Label
               key={radio.id}
               htmlFor={radio.id.toString()}
               className={`flex items-center space-x-2 border border-solid border-[#CFCFCF] py-[1.125rem] px-4 rounded-lg cursor-pointer ${
                  value === radio.value ? "border-custom-brown" : ""
               }`}
            >
               <RadioButton
                  value={radio.value}
                  id={radio.id.toString()}
                  className="text-custom-brown border-[#CFCFCF]"
               />
               <span>{radio.label}</span>
            </Label>
         ))}
      </RadioButtonsGroup>
   );
}
