import './globals.css';
import React from 'react';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-public-sans',
});

export const metadata = {
  title: 'ePayco Test - Todo App',
  description: 'Todo App with Atomic Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${publicSans.className} bg-background-paper text-text-primary antialiased border-t-8 border-primary`}>{children}</body>
    </html>
  );
}
