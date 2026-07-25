import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RiMax Technologies",
    template: "%s | RiMax Technologies",
  },
  description:
      "RiMax Technologies provides professional customer support, live chat support, email support, technical support, and scalable technology solutions worldwide.",
  keywords: [
    "Customer Support",
    "Live Chat Support",
    "Email Support",
    "Technical Support",
    "Help Desk",
    "Business Process Outsourcing",
    "BPO",
    "RiMax Technologies",
  ],
  authors: [
    {
      name: "RiMax Technologies",
    },
  ],
  creator: "RiMax Technologies",
  publisher: "RiMax Technologies",
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
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
      {children}
      </body>
      </html>
  );
}