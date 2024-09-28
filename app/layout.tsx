import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collab Pad",
  description: "Next-Gen Study Note App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Header />
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-5 overflow-y-uaot scrollbar-hide bg-gray-50">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
