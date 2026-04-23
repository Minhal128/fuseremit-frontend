import type { Metadata } from "next";
import { Manrope } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "fuseremit - Global Payments",
  description: "Secure and fast money transfers.",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-manrope"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}