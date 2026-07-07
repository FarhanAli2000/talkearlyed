import Header from "../components/Header";
import Footer from "../components/Footer";

function Maddie() {
  return (
    <main className="maddie-page">
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
            <h2>Maddie Win</h2>
            <p className="author-profile__role">Passionate Reading Teacher</p>
            <p className="author-profile__bio">
              Maddie Win brings years of experience as a dedicated reading
              teacher, helping children unlock the world of stories and develop
              a lifelong love for books. She offers practical tips for parents
              and educators, from building early literacy habits to supporting
              reluctant readers. Her classroom experiences shape her guidance,
              making it both relatable and effective. Through Talk EarlyEd,
              Maddie shares her passion for literacy, inspiring caregivers to
              nurture confident, curious learners one page at a time.
            </p>
          </div>

          <img
            className="author-profile__image"
            src="/images/Maddie.png"
            alt="Maddie Win"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Maddie;
