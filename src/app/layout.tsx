import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ 
  subsets: ["latin"],
  display: 'swap',
  weight: "variable",
  variable: "--font-archivo"
});

export const metadata: Metadata = {
  title: "Narasimha",
  description: "The OG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${archivo.className} ${archivo.variable} bg-stone-200 text-stone-900 font-sans`}>{children}</body>
    </html>
  );
}
