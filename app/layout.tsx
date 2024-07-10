import type { Metadata } from "next";
import { Inter, Montserrat, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["100", "300", "400", "700", "900"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});


export const metadata: Metadata = {
  title: "Next Eventos UNSA",
  description: "WebSite de eventos de la UNSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${montserrat.variable}`}> {/* <h3 className={cn(titleStyle, className)}>{title}</h3> */}
      <body className="bg-gray-200 font-light text-base" >{children}</body>
    </html>
  );
}

