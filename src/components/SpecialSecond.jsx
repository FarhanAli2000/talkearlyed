const articles = [
  {
    title: "8 Rules of Thumb in UI Design",
    featured: true,
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
  },
  {
    title: "How to build strong portfolio and get a job: UI/UX case study",
    href: "#special-needs",
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

function SpecialSecond() {
  return (
    <section className="parenting-blog special-second">
      <div className="parenting-blog__inner">
        <div className="special-second__main">
          <div className="parenting-heading">
            <p>Why LA parents come back</p>
            <h2>
              <span>Special</span> Needs
            </h2>
          </div>

          <div className="special-second__grid">
            {articles.map((article, index) => (
              <article
                className={`special-second-card${
                  article.featured ? " special-second-card--featured" : ""
                }`}
                key={`${article.title}-${index}`}
              >
                <img src="/images/girl3.png" alt="" />
                <div className="special-second-card__panel">
                  <h3>{article.title}</h3>
                  {article.featured && (
                    <>
                      <p>{article.description}</p>
                      <a href={article.href}>Read More</a>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="special-second__more">
            <a href="#special-needs">Read More</a>
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

export default SpecialSecond;
