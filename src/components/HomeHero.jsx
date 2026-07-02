const cards = [
  {
    title: "Pick a preschool with confidence",
    text: "Tours, waitlists, ratios, cost, we break down what matters so you can find the right preschool near you, not just the closest one.",
    image: "/images/Hero.jpg",
    className: "resource-card--orange",
  },
  {
    title: "See if your child qualifies for TK",
    text: "California's transitional kindergarten rules shift every year by birthday. Check eligibility in seconds and know your next move.",
    image: "/images/Hero1.png",
    className: "resource-card--purple",
  },
  {
    title: "Get early support, sooner",
    text: "Worried about speech, behavior, or sensory needs? Understand the early signs and find the right help across L.A. without the runaround.",
    image: "/images/Hero2.png",
    className: "resource-card--yellow",
  },
];

function HomeHero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: 'url("/images/main.jpg")' }}
    >
      <div className="home-hero__overlay" />

      <div className="home-hero__content">
        <div className="home-hero__eyebrow-wrap">
          <p className="home-hero__eyebrow">
            Early education, made simple for L.A families
          </p>
          <img
            className="home-hero__underline"
            src="/images/Layer_1-2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="home-hero__title">
          Helping Los Angeles Families Navigate{" "}
          <span>Early Childhood Education</span>
        </h1>

        <p className="home-hero__copy">
          From your first preschool tour to your child's first words, we help
          you find the right early-education support near you, written for
          parents across Los Angeles
        </p>

        <div className="home-hero__actions">
          <a className="hero-button hero-button--primary" href="#resources">
            Explore LA Resources
            <span aria-hidden="true">→</span>
          </a>
          <a className="hero-button hero-button--secondary" href="#guides">
            Browse Parent Guides
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="resource-grid" id="resources">
          {cards.map((card) => (
            <article className={`resource-card ${card.className}`} key={card.title}>
              <div className="resource-card__body">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <a href="#learn-more">
                  Learn More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <img src={card.image} alt="" />
            </article>
          ))}
        </div>
      </div>

      <img
        className="hero-decor hero-decor--star"
        src="/images/Star%201.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-decor hero-decor--spiral"
        src="/images/Asset%2049.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-skyline" aria-hidden="true" />
    </section>
  );
}

export default HomeHero;
