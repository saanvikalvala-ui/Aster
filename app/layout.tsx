import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aster — Navigate Your Future",
  description:
    "Your all-in-one student operating system for college, scholarships, test prep, and everything ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
