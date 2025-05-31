import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Open_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/ui/navbar-1";

const font = Poppins({weight: ["200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Ameraa Finnway",
  description: "We Facilitate Project Financing through Top Government Banks for Large-Scale Business and Infrastructure Projects Across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar1/>
        {children}
      </body>
    </html>
  );
}
