import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grok Landing | Frontend Excellence by Grok",
  description: "A professional, space-themed landing page showcasing Grok's superior frontend development capabilities, built with Next.js, Three.js, Framer Motion and modern shadcn/ui design. Demonstrating seamless GitHub integration.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
