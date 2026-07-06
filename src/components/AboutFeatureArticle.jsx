function AboutFeatureArticle() {
  return (
    <section className="about-feature" aria-labelledby="about-feature-title">
      <article className="about-feature__inner">
        <div className="about-feature__copy">
          <p className="about-feature__date">January 12, 2023</p>
          <h2 id="about-feature-title">
            <span>The Benefits of</span>
            <span>Sustainable Interior Design</span>
          </h2>
          <p className="about-feature__text">
            Bottleneck mice my capacity is full, nor incentivization we need to
            start advertising on social media, or helicopter view, for what the.
            Let's put a pin in that we need to build it so that it scales, are
            there any leftovers in the kitchen?, if you're not hurting you're
            not winning loop back
          </p>
          <a className="about-feature__button" href="#read-more">
            Read More
          </a>
        </div>

        <img
          className="about-feature__image"
          src="/images/40f56418df5983b0d9df786d86aacc10c770bcf6%20(1).jpg"
          alt="Children drawing in a classroom with a teacher"
        />
      </article>
    </section>
  );
}

export default AboutFeatureArticle;
