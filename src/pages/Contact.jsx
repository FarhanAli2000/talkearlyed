import Header from "../components/Header";
import ContactHero from "../components/ContactHero";
import ContactFormSection from "../components/ContactFormSection";
import Footer from "../components/Footer";

function Contact() {
  return (
    <main className="contact-page">
      <Header />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </main>
  );
}

export default Contact;
