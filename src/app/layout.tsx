import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from '@/components/navbar'
import Metrics from "@/seo/Metrics";
import ogImage from "@/app/opengraph-image.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface ExtendedMetadata extends Metadata {
  rating: {
    ratingValue: number;
    reviewCount: number;
  };
  pricing:{
    budget:string;
    duration:string;
  }
}

export const metadata: ExtendedMetadata = {
  metadataBase: new URL('https://yume-staging.web.app/'),
  title: {
    default:"Yume Labs | UX/UI Design for AI, Embedded, Mobile, & Web",
    template: "%s - Yume Labs | UX/UI Design for AI, Embedded, Mobile, & Web",
  },
  description: "We drive customer conviction and investor interest for your product by setting it apart through deeper user research, product innovation, and experience design.",
  openGraph: {
    images: ogImage.src,
  }, 
  rating: {
    ratingValue: 4.8,
    reviewCount: 16
  },
  pricing:{
    budget:"$5000/m",
    duration:"3 months"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/> 
          {children}
        <Metrics />
      </body>
    </html>
  );
}
