export default function Input({
   type,
   placeholder,
   name,
   className,
   id,
}: {
   type?: "text" | "number" | "tel" | "email";
   placeholder?: string;
   name?: string;
   className?: string;
   label?: string;
   error?: string;
   id?: string;
}) {
   return (
      <label htmlFor={id}>
         <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className={`rounded-lg text-sm  py-[1.125rem] px-6 placeholder:text-black placeholder:opacity-40 font-bold border-[#CFCFCF] border-solid border-2 focus:outline-none focus:border-custom-brown focus:caret-custom-brown ${
               className ?? ""
            }`}
         />
      </label>
   );
}
