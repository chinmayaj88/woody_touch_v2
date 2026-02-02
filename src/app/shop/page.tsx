import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShopListing from "@/components/shop/ShopListing";

export default function ShopPage() {
  return (
    <main>
      <Header />
      <ShopListing />
      <Footer />
    </main>
  );
}
