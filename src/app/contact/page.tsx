import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  );
}
