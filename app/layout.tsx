import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-dmsans',
});

export const metadata: Metadata = {
  title: "CodeMotion",
  description: "Platform for coders",
  icons: {
    icon: '/assets/cd.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dmsans.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}