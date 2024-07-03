import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import { Footer, Header, SubscribeOrc } from "@/components/ui";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "8-bit Portfolio",
  description: "Next.js 8-bit Portfolio with Nes.css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <Header />
        {children}
        <SubscribeOrc />
        <Footer />
      </body>
    </html>
  );
}
