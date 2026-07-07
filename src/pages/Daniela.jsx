import Header from "../components/Header";
import Footer from "../components/Footer";

function Daniela() {
  return (
    <main className="daniela-page">
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
            <h2>Daniela Morales</h2>
            <p className="author-profile__role">Enthusiastic Science Teacher</p>
            <p className="author-profile__bio">
              Daniela Lopez combines her love for science with her role as an
              experienced educator, encouraging children to explore the world
              with curiosity and creativity. She shares insights on hands-on
              experiments, STEM activities, and ways to make science fun at home
              and in the classroom. Her teaching background allows her to offer
              advice that feels both practical and inspiring. At talk EarlyEd,
              Daniela brings science to life, showing caregivers how to spark
              curiosity and confidence in young learners.
            </p>
          </div>

          <img
            className="author-profile__image"
            src="/images/Danielaa.png"
            alt="Daniela Morales"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Daniela;
