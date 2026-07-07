const featuredArticle = {
  tag: "Tips",
  title: "The Importance of Reading: How to Encourage Kids to Love Books",
  description:
    "Simple tips to inspire a love for books in kids, from creating a cozy reading nook to choosing stories that match their interests.",
  href: "#parenting",
};

const articles = [
  {
    tag: "Blog",
    title: "Quick Exercises to Boost Focus and Memory in Kids",
    description:
      "These activities are designed to be engaging, easy to do, and perfect for kids of all ages.",
    href: "#parenting",
  },
  {
    tag: "News",
    title: "Crafts That Teach and Entertain at the Same Time",
    description:
      "These projects teach essential skills like problem-solving, math, and geography.",
    href: "#parenting",
  },
  {
    tag: "Blog",
    title: "Why Kids Learn Best When They're Having a Blast",
    description:
      "Discover how play, laughter, and engaging activities activate young minds.",
    href: "#parenting",
  },
];

function LatestArticles() {
  return (
    <section className="latest-articles">
      <img
        className="latest-articles__dots"
        src="/images/Asset%2047.png"
        alt=""
        aria-hidden="true"
      />

      <div className="latest-articles__inner">
        <div className="latest-articles__header">
          <div className="latest-articles__heading">
            <p className="latest-articles__eyebrow">Latest Article</p>
            <h2>
              Fresh <span>guidance</span> for LA families.
            </h2>
          </div>

          <p className="latest-articles__intro">
            New guides, local tips, and early-education updates, straight to the
            point
          </p>

          <a className="latest-articles__view-all" href="#parenting">
            View All
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="latest-articles__content">
          <article className="latest-articles__featured">
            <div className="latest-articles__media">
              <span className="latest-articles__tag">{featuredArticle.tag}</span>
            </div>
            <h3>{featuredArticle.title}</h3>
            <p>{featuredArticle.description}</p>
            <a href={featuredArticle.href}>Read More &gt;</a>
          </article>

          <div className="latest-articles__list">
            {articles.map((article) => (
              <article className="latest-articles__item" key={article.title}>
                <div className="latest-articles__media latest-articles__media--small">
                  <span className="latest-articles__tag">{article.tag}</span>
                </div>
                <div className="latest-articles__item-copy">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.href}>Read More &gt;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
