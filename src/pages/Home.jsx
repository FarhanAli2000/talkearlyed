import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import LocationAnswers from "../components/LocationAnswers";
import ClaritySection from "../components/ClaritySection";
import DecisionHelp from "../components/DecisionHelp";
import HelpDifference from "../components/HelpDifference";
import HomeGuidance from "../components/HomeGuidance";
import LocalDirectoryCTA from "../components/LocalDirectoryCTA";
import LatestArticles from "../components/LatestArticles";
import Animation from "../components/Animation";
import OurAuthors from "../components/OurAuthors";
import HomeLA from "../components/HomeLA";
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
      <LatestArticles />
      <HomeGuidance />
      <Animation />
      <OurAuthors />
      <HomeLA />
      <Footer />
    </main>
  );
}

export default Home;
