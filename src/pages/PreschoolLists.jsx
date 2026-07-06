import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutFeatureArticle from "../components/AboutFeatureArticle";
import AboutDesignArticle from "../components/AboutDesignArticle";
import AboutColorArticle from "../components/AboutColorArticle";
import AboutLightArticle from "../components/AboutLightArticle";
import AboutSustainableArticle from "../components/AboutSustainableArticle";
import AboutTransformArticle from "../components/AboutTransformArticle";
import Footer from "../components/Footer";

function PreschoolLists() {
  return (
    <main className="preschool-lists-page">
      <Header />
      <AboutHero />
      <AboutFeatureArticle />
      <AboutDesignArticle />
      <AboutColorArticle />
      <AboutLightArticle />
      <AboutSustainableArticle />
      <AboutTransformArticle />
      <Footer />
    </main>
  );
}

export default PreschoolLists;
