import Header from "../components/Header";
import SpecialHero from "../components/SpecialHero";
import SpecialSecond from "../components/SpecialSecond";
import SpecialFaqs from "../components/SpecialFaqs";
import ParentingNewsletter from "../components/ParentingNewsletter";
import Footer from "../components/Footer";

function SpecialNeeds() {
  return (
    <main className="special-needs-page">
      <Header />
      <SpecialHero />
      <SpecialSecond />
      <SpecialFaqs />

      <ParentingNewsletter sectionClassName="home-cta" />

      <Footer />
    </main>
  );
}

export default SpecialNeeds;
