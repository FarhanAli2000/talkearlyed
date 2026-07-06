import Header from "../components/Header";
import LosHero from "../components/LosHero";
import LosSecond from "../components/LosSecond";
import LosFaqs from "../components/LosFaqs";
import Footer from "../components/Footer";

function LosAngelesResources() {
  return (
    <main className="los-angeles-resources-page">
      <Header />
      <LosHero />
      <LosSecond />
      <LosFaqs />

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

export default LosAngelesResources;
