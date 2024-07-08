import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
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
    <html lang="es">
      <body className={(inter.variable, montserrat.variable)}>{children}</body>
    </html>
  );
}
