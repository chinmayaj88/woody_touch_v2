import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import NewProducts from "@/components/home/NewProducts";
import AboutBanner from "@/components/home/AboutBanner";
import RoomCategories from "@/components/home/RoomCategories";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <NewProducts />
      <AboutBanner />
      <RoomCategories />
      <Reviews />
      <Footer />
    </main>
  );
}
