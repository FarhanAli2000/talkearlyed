import Header from "../components/Header";
import RecommendationsHero from "../components/RecommendationsHero";
import RecommendSecond from "../components/RecommendSecond";
import RecommendFaqs from "../components/RecommendFaqs";
import Footer from "../components/Footer";

function Recommendations() {
  return (
    <main className="recommendations-page">
      <Header />
      <RecommendationsHero />
      <RecommendSecond />
      <RecommendFaqs />

      <section className="parenting-newsletter">
        <div className="parenting-newsletter__card">
          <span>Parent Newsletter</span>
          <h2>Subscribe for Parenting Tips</h2>
          <p>
            Preschool checklists, TK reminders, and local guides, short,
            useful, and made for busy parents
          </p>
          <form>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Recommendations;
