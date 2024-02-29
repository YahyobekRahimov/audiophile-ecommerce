import Container from "@/app/components/Container";
import Logo from "@/app/components/IconComponents/Logo";
import Link from "next/link";

export default function NavSection() {
   return (
      <section className="bg-custom-black-800">
         <Container>
            <div>
               <Logo />
               <ul className="uppercase">
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/"
                     >
                        home
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/headphone"
                     >
                        headphones
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/speaker"
                     >
                        speakers
                     </Link>
                  </li>
                  <li>
                     <Link
                        className="text-white tracking-[2px] font-bold text-[0.8125rem] hover:text-custom-brown duration-200"
                        href="/category/earphone"
                     >
                        earphones
                     </Link>
                  </li>
               </ul>
            </div>
         </Container>
      </section>
   );
}
