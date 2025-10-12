import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthSync from "@/components/AuthSync";
import ClientProviders from "@/components/ClientProviders";
import ToastProvider from "@/components/ToastProvider ";
import ThemeSync from "@/components/ThemeSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanieh Portfolio",
  description: "Personal portfolio of Hanieh",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          <AuthSync/>
          <ThemeSync/>
          {children}
          <ToastProvider/>
        </ClientProviders>
      </body>
    </html>
  );
}
