import type { Metadata } from "next";
import DesignerBadge from "@/components/layout/DesignerBadge";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woody Touch | Premium Cane Furniture Store",
  description:
    "Experience the natural beauty and craftsmanship of handcrafted, sustainable cane furniture in Bhubaneswar, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DesignerBadge />
      </body>
    </html>
  );
}
