import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutSecurityService from "../components/AboutSecurityService";
import AboutNetworkSection from "../components/AboutNetworkSection";
import Footer from "../components/Footer";

function About() {
  return (
    <main className="about-page">
      <Header />
      <AboutHero />
      <AboutSecurityService />
      <AboutNetworkSection />
      <Footer />
    </main>
  );
}

export default About;
