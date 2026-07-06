const resourceCards = [
  {
    title: "Preschools",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    href: "#preschool-lists",
  },
  {
    title: "Daycares",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    href: "#daycares",
  },
  {
    title: "Speech Therapy",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    href: "#speech-therapy",
  },
];

const downloads = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
];

const relatedArticles = [
  { image: "/images/girl3.png" },
  { image: "/images/girl3.png" },
  { image: "/images/girl3.png" },
  { image: "/images/girl3.png" },
];

function LosSecond() {
  return (
    <section className="parenting-blog los-second">
      <div className="parenting-blog__inner">
        <div className="los-second__main">
          <div className="parenting-heading">
            <p>Why LA parents come back</p>
            <h2>
              <span>Los Angeles</span> Resources
            </h2>
          </div>

          <div className="los-second__cards">
            {resourceCards.map((card) => (
              <article className="los-second-card" key={card.title}>
                <div className="los-second-card__image" aria-hidden="true" />
                <div className="los-second-card__body">
                  <span className="los-second-card__tag">Blogs</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a className="los-second-card__button" href={card.href}>
                    Discover Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="parenting-sidebar">
          <div className="parenting-side-block">
            <p className="parenting-side-block__eyebrow">Downloadable</p>
            <h2>Resources</h2>
            {downloads.map((resource) => (
              <article className="resource-link-card" key={resource}>
                <h3>
                  {resource}
                  <span>Download Now</span>
                </h3>
                <p>Play-based, Montessori, and private options near you</p>
              </article>
            ))}
          </div>

          <div className="parenting-side-block parenting-side-block--related">
            <p className="parenting-side-block__eyebrow">Related</p>
            <h2>Articles</h2>
            {relatedArticles.map((article, index) => (
              <article className="related-card" key={`related-${index}`}>
                <img src={article.image} alt="" />
                <div>
                  <h3>Overview of the Design Principles</h3>
                  <p>
                    What are Design Principles? To understand design principles.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default LosSecond;
