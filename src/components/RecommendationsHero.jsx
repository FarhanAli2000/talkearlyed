function RecommendationsHero() {
  return (
    <section
      className="about-hero recommendations-hero"
      style={{ backgroundImage: 'url("/images/girl1.png")' }}
    >
      <div className="about-hero__overlay" />

      <div className="about-hero__content">
        <div className="about-hero__eyebrow-wrap">
          <p className="about-hero__eyebrow">Parent-Tested Favorites</p>
          <img
            className="about-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="about-hero__title">
          The Best Picks for <span>Growing Minds</span>
        </h1>

        <p className="about-hero__copy">
          Carefully selected toys, books, learning tools, and everyday
          essentials that inspire curiosity, creativity, and confident learning.
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

export default RecommendationsHero;
