import "./global.css";
import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-morrow",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#F0F0E0" };

export const metadata: Metadata = {
  title: "More Morrow · ₹150 off your next visit",
  description:
    "Good coffee. Better company. Claim ₹150 off your next visit to Morrow Café in Sector 104, Noida.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-astryx-theme="matcha"
      data-theme="light"
      className={`${figtree.variable} motion-safe:scroll-smooth`}
    >
      <body className="[--font-family-body:var(--font-morrow)] [--font-family-heading:var(--font-morrow)] bg-paper font-sans text-base text-ink antialiased selection:bg-olive selection:text-paper">
        {children}
      </body>
    </html>
  );
}
