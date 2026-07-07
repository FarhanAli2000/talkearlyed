import Header from "../components/Header";
import Footer from "../components/Footer";

function JoselinMartinez() {
  return (
    <main className="joselin-martinez-page">
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
            <h2>Joseline Martinez</h2>
            <p className="author-profile__role">
              Experienced Childcare &amp; Parenting Blogger
            </p>
            <p className="author-profile__bio">
              Joseline Martinez is the author at Talk EarlyEd, bringing over 15
              years of hands-on experience in childcare. As a dedicated daycare
              center owner, she shares valuable insights on parenting, autism,
              infant care, and teacher tips. Her expertise stems from real-life
              experiences, making her advice practical and relatable. Joseline
              is passionate about guiding parents and educators through everyday
              challenges with empathy and wisdom. Through TalkEarlyEd, she aims
              to build a supportive community for caregivers. Her stories reflect
              both the joys and struggles of nurturing young minds.
            </p>
          </div>

          <img
            className="author-profile__image"
            src="/images/Joselinee.png"
            alt="Joseline Martinez"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default JoselinMartinez;
