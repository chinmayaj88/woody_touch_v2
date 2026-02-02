import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import Collections from "@/components/about/Collections";
import InstagramGallery from "@/components/about/InstagramGallery";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <Collections />
      <InstagramGallery />
      <Footer />
    </main>
  );
}
