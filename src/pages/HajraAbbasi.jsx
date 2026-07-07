import Header from "../components/Header";
import Footer from "../components/Footer";

function HajraAbbasi() {
  return (
    <main className="hajra-abbasi-page">
      <Header />

      <section
        className="about-hero author-hero"
        style={{ backgroundImage: 'url("/images/girl3.png")' }}
      >
        <div className="about-hero__overlay" />

        <div className="about-hero__content">
          <div className="about-hero__eyebrow-wrap">
            <p className="about-hero__eyebrow">
              Early education, made simple for LA families
            </p>
            <img
              className="about-hero__underline"
              src="/images/Layer_1-2.png"
              alt=""
              aria-hidden="true"
            />
          </div>

          <h1 className="about-hero__title">
            Meet our <span>Author</span>
          </h1>

          <p className="about-hero__copy">
            From your first preschool tour to your child's first words, we help
            you find the right early-education support near you, written for
            parents across Los Angeles
          </p>
        </div>

        <img
          className="about-hero__decor about-hero__decor--star"
          src="/images/Star%201.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="about-hero__decor about-hero__decor--spiral"
          src="/images/Asset%2049.png"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="author-profile">
        <div className="author-profile__inner">
          <div className="author-profile__copy">
            <p className="author-profile__eyebrow">Meet the author</p>
            <h2>Hajra Abbasi</h2>
            <p className="author-profile__role">Head Of Kindergarten</p>
            <p className="author-profile__bio">
              Hajra Abbasi leads with extensive experience in early education
              as the head of kindergarten. She is passionate about guiding young
              learners through their foundational years, focusing on creativity,
              social-emotional growth, and early academics. Her leadership offers
              parents and teachers valuable strategies to help children thrive as
              they begin structured learning. With her insights, Talk EarlyEd
              highlights the importance of strong beginnings, empowering
              caregivers to nurture happy, confident learners from the very
              start.
            </p>
          </div>

          <img
            className="author-profile__image"
            src="/images/HajraAbbasi.png"
            alt="Hajra Abbasi"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default HajraAbbasi;
