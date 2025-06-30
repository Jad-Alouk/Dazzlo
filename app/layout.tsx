import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Dazzlo",
  description: "Buy products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-full flex flex-col bg-white"
      >
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
