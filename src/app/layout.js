'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.scss";
import Meta from "@/components/Meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (

    <html lang="ko">
      <head prefix="og: http://ogp.me/ns# fb: http://ogpme/ns/fb# website: http://ogp.me/ns/website#">
      <title>산타 잡기</title>
      <Meta />
      <link rel="apple-touch-icon" href="https://santa.tote.co.jp/apple-touch-icon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&amp;display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
