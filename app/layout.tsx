import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartGen Digital| Full Stack Digital Agency",
  description: "SmartGen Digital is Bangladesh’s leading agency for conversion-focused websites, cinematic video production, and emotionally resonant branding. We help startups, charities, and businesses grow with premium design, SEO, and scalable digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-brands/css/uicons-brands.css'></link>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-straight/css/uicons-regular-straight.css'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <div className="messenger">
          <a href="https://www.facebook.com/smartgendigitalagency"
          target="_blank"><i className="fi fi-brands-facebook-messenger"
            rel="noopener noreferrer"
          ></i></a>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
