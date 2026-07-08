const featuredArticle = {
  tag: "Tips",
  title:
    "Crafts for Kids: Easy, Creative, and Educational Activities For Every Age",
  description:
    "Fun, hands-on craft ideas that build creativity, fine motor skills, and early learning through play.",
  image: "/images/WhatsApp-Image-2026-06-16-at-4.41.23-PM.webp",
  href: "#crafts-for-kids",
};

const articles = [
  {
    tag: "Blog",
    title: "Outdoor Sensory Play Ideas for Babies and Toddlers",
    description:
      "The best outdoor sensory play ideas for babies and toddlers that are fun, safe, and developmentally enriching.",
    image: "/images/blog10.webp",
    href: "#outdoor-sensory-play-ideas-for-babies-and-toddlers",
  },
  {
    tag: "News",
    title: "Indoor Sensory Activities for Infants During Rainy Days",
    description:
      "Practical indoor sensory activities for infants to keep them engaged and support development on rainy days.",
    image: "/images/featued-1-1.webp",
    href: "#indoor-sensory-activities-for-infants-during-rainy-days",
  },
  {
    tag: "Blog",
    title: "Learning Toys for 4-Year-Olds: A Complete Guide to Smart, Fun Play",
    description:
      "Smart, fun learning toys that support creativity, problem-solving, and kindergarten readiness.",
    image: "/images/ted-blog-8-1.webp",
    href: "#learning-toys-for-4-year-olds",
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
            <a className="latest-articles__media" href={featuredArticle.href}>
              <img src={featuredArticle.image} alt="" />
              <span className="latest-articles__tag">{featuredArticle.tag}</span>
            </a>
            <h3>
              <a href={featuredArticle.href}>{featuredArticle.title}</a>
            </h3>
            <p>{featuredArticle.description}</p>
            <a href={featuredArticle.href}>Read More &gt;</a>
          </article>

          <div className="latest-articles__list">
            {articles.map((article) => (
              <article className="latest-articles__item" key={article.title}>
                <a
                  className="latest-articles__media latest-articles__media--small"
                  href={article.href}
                >
                  <img src={article.image} alt="" />
                  <span className="latest-articles__tag">{article.tag}</span>
                </a>
                <div className="latest-articles__item-copy">
                  <h3>
                    <a href={article.href}>{article.title}</a>
                  </h3>
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
