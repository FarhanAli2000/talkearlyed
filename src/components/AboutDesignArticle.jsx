function AboutDesignArticle() {
  return (
    <section className="about-design" aria-labelledby="about-design-title">
      <article className="about-design__inner">
        <img
          className="about-design__image"
          src="/images/girl.png"
          alt="Teacher helping young children with a classroom activity"
        />

        <div className="about-design__copy">
          <p className="about-design__date">January 12, 2023</p>
          <h2 id="about-design-title">
            <span>Transform Your Home:</span>
            <span>The Power of Interior Design</span>
          </h2>
          <p className="about-design__text">
            Bottleneck mice my capacity is full, nor incentivization we need to
            start advertising on social media, or helicopter view, for what the.
            Let's put a pin in that we need to build it so that it scales, are
            there any leftovers in the kitchen?, if you're not hurting you're
            not winning loop back
          </p>
          <a className="about-design__button" href="#read-more">
            Read More
          </a>
        </div>
      </article>
    </section>
  );
}

export default AboutDesignArticle;
