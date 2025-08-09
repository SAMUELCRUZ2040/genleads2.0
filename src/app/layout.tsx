import type { Metadata } from "next";
import "@/stylesheets/globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

export const metadata: Metadata = {
  title: "Gen Leads",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
