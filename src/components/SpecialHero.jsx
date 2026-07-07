function SpecialHero() {
  return (
    <section
      className="about-hero special-hero"
      style={{ backgroundImage: 'url("/images/girl1.png")' }}
    >
      <div className="about-hero__overlay" />

      <div className="about-hero__content">
        <div className="about-hero__eyebrow-wrap">
          <p className="about-hero__eyebrow">Supporting Every Unique Journey</p>
          <img
            className="about-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="about-hero__title">
          Every Ability <span>Matters</span>
        </h1>

        <p className="about-hero__copy">
          Explore trusted guidance, therapy resources, developmental insights,
          and practical support to help your child grow, learn, and reach their
          full potential.
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

export default SpecialHero;
