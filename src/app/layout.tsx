import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'; 
import { GeistMono } from 'geist/font/mono';
import Header from "@/components/header"; 
import Footer from "@/components/footer";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "awearsense",
  description: "neural interface for everyday use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} bg-brand-light`}>
        <body>
        <Header/> 
        {children}
        <Footer/>
        </body>
    </html>
  );
}
