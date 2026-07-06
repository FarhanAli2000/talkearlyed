function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: 'url("/images/girl3.png")' }}
    >
      <div className="about-hero__overlay" />

      <div className="about-hero__content">
        <div className="about-hero__eyebrow-wrap">
          <p className="about-hero__eyebrow">
            Early education, made simple for L.A families
          </p>
          <img
            className="about-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="about-hero__title">
          Discover Every Thing <span>About Us</span>
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
  );
}

export default AboutHero;
