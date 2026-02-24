import type { Metadata } from "next";
import { rubik, heebo } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildersView — שותפים לבנייה של רעיונות",
  description:
    "BuildersView היא שותפה אסטרטגית לבנייה והגשמה של רעיונות. מהקשבה לרעיון ועד למוצר חי ומתוחזק.",
  openGraph: {
    title: "BuildersView — שותפים לבנייה של רעיונות",
    description:
      "BuildersView היא שותפה אסטרטגית לבנייה והגשמה של רעיונות. מהקשבה לרעיון ועד למוצר חי ומתוחזק.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
