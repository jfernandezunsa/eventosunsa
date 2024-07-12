import type { Metadata } from "next";
import { Inter, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import MenuMain from "@/components/custom/menuMain";
import { Mail, Phone, MapPin } from "lucide-react";
import LayoutFooter from "@/components/custom/layoutFooter";
import LayoutHeader from "@/components/custom/layoutHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "Eventos UNSA Next",
  description: "WebSite de eventos de la UNSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${montserrat.variable}`}>
      <body className="bg-gray-200 font-light text-base">
      <LayoutHeader />
        {children}
      <LayoutFooter />
      </body>
    </html>
  );
}
