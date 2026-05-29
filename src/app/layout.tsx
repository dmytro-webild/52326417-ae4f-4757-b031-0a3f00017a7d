import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Fouchana: Discover Tunisia\'s Emerging Hub',
  description: 'Explore Fouchana, a dynamic city in Tunisia offering rich culture, economic opportunities, and a vibrant community. Your guide to living and investing in Fouchana.',
  openGraph: {
    "title": "Fouchana: Discover Tunisia's Emerging Hub",
    "description": "Explore Fouchana, a dynamic city in Tunisia offering rich culture, economic opportunities, and a vibrant community. Your guide to living and investing in Fouchana.",
    "url": "https://www.fouchana.tn",
    "siteName": "Fouchana",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/plaza-de-espana-venetian-towers-fountain-view-from-palau-nacional-barcelona-spain_1268-17848.jpg",
        "alt": "Panoramic view of Fouchana city"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Fouchana: Discover Tunisia's Emerging Hub",
    "description": "Explore Fouchana, a dynamic city in Tunisia offering rich culture, economic opportunities, and a vibrant community. Your guide to living and investing in Fouchana.",
    "images": [
      "http://img.b2bpic.net/free-photo/plaza-de-espana-venetian-towers-fountain-view-from-palau-nacional-barcelona-spain_1268-17848.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
