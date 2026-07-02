import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import LocationAnswers from "../components/LocationAnswers";
import ClaritySection from "../components/ClaritySection";
import DecisionHelp from "../components/DecisionHelp";
import HelpDifference from "../components/HelpDifference";
import LocalDirectoryCTA from "../components/LocalDirectoryCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="home-page">
      <Header />
      <HomeHero />
      <LocationAnswers />
      <ClaritySection />
      <DecisionHelp />
      <HelpDifference />
      <LocalDirectoryCTA />
      <Footer />
    </main>
  );
}

export default Home;
