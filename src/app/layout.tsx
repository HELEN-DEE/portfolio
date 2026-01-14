// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helen - Web Developer Portfolio",
  description: "Frontend Developer building digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}