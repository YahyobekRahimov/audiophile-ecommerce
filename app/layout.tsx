import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
   subsets: ["latin"],
   weight: ["400", "700"],
});

export const metadata: Metadata = {
   title: "AudioPhile Store",
   description:
      "This is the best audio store you can ever buy products from. To learn more, visit our website!",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={manrope.className}>{children}</body>
      </html>
   );
}
