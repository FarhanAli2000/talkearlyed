function SummerCampsHero() {
  return (
    <section
      className="about-hero special-hero"
      style={{
        backgroundImage:
          'url("/images/40f56418df5983b0d9df786d86aacc10c770bcf6%20(1).jpg")',
      }}
    >
      <div className="about-hero__overlay" />

      <div className="about-hero__content">
        <div className="about-hero__eyebrow-wrap">
          <p className="about-hero__eyebrow">Los Angeles Summer Camp Guide</p>
          <img
            className="about-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="about-hero__title">
          Where Learning <span>Meets Adventure</span>
        </h1>

        <p className="about-hero__copy">
          Explore exciting summer camps that inspire creativity, build
          confidence, and keep children learning through fun, hands-on
          experiences.
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

export default SummerCampsHero;
