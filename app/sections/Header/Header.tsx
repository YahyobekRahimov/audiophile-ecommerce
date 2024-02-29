import Container from "@/app/components/Container";
import Logo from "@/app/components/IconComponents/Logo";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";
import CartButton from "./CartButton/CartButton";
import DesktopNav from "./DesktopNav/DesktopNav";

export default function Header() {
   return (
      <header className="bg-custom-black-900">
         <Container className="flex items-center justify-between py-8 relative">
            <MobileNavMenu />
            <Link href="/">
               <Logo />
            </Link>
            <DesktopNav />
            <CartButton />
         </Container>
      </header>
   );
}
