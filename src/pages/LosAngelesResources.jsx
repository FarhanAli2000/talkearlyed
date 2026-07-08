import Header from "../components/Header";
import LosHero from "../components/LosHero";
import LosSecond from "../components/LosSecond";
import LosFaqs from "../components/LosFaqs";
import LosAngelesCTA from "../components/LosAngelesCTA";
import Footer from "../components/Footer";

function LosAngelesResources() {
  return (
    <main className="los-angeles-resources-page">
      <Header />
      <LosHero />
      <LosSecond />
      <LosFaqs />

      <LosAngelesCTA />

      <Footer />
    </main>
  );
}

export default LosAngelesResources;
