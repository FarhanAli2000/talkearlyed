function SpeechTherapyHero() {
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
          <p className="about-hero__eyebrow">Los Angeles Speech Therapy Guide</p>
          <img
            className="about-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="about-hero__title">
          Helping Every Child <span>Find Their Voice</span>
        </h1>

        <p className="about-hero__copy">
          Connect with trusted speech-language professionals who support
          communication, language development, and confidence through
          personalized care.
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

export default SpeechTherapyHero;
