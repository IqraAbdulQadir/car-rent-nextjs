import type { Metadata } from "next";
import "./globals.css";

// Importing Plus Jakarta Sans from Google Fonts
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"], // Adjust this if you need more subsets (e.g., 'latin-ext')
  weight: ["400", "500", "600", "700"], // Add weights you need
  variable: "--font-plus-jakarta", // CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* No additional <link> tags needed; Next.js handles font optimization */}
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
