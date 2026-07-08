import Header from "../components/Header";
import RecommendationsHero from "../components/RecommendationsHero";
import RecommendSecond from "../components/RecommendSecond";
import RecommendFaqs from "../components/RecommendFaqs";
import RecommendationCta from "../components/RecommendationCta";
import Footer from "../components/Footer";

function Recommendations() {
  return (
    <main className="recommendations-page">
      <Header />
      <RecommendationsHero />
      <RecommendSecond />
      <RecommendFaqs />

      <RecommendationCta />

      <Footer />
    </main>
  );
}

export default Recommendations;
