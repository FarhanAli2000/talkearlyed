const posts = [
  {
    title: "Autism Chewing Toys: Why Kids Chew and the Best Safe Options",
    meta: "Maddie Win - May 11, 2026",
    image: "/images/toy1.webp",
    href: "#autism-chewing-toys-why-kids-chew-and-the-best-safe-options",
    description:
      "Chewing is a common sensory-seeking behavior in children with autism; it provides oral sensory input that helps the nervous system regulate.",
  },
  {
    title: "Learning Toys for 4-Year-Olds: A Complete Guide to Smart, Fun Play",
    meta: "Joseline Martinez - March 27, 2026",
    image: "/images/ted-blog-8-1.webp",
    href: "#learning-toys-for-4-year-olds",
    description:
      "Sensory play isn't just fun, it's essential for your baby's motor skill development. Explore activities that enhance movement, coordination, and brain growth.",
  },
  {
    title: "How Sensory Play Helps Infant Motor Skill Development",
    meta: "Hajra Abbasi - March 18, 2026",
    image: "/images/TED-blog7-1.webp",
    href: "#how-sensory-play-helps-infant-motor-skill-development",
    description:
      "As parents, caregivers, or early educators, we often focus on teaching words or colors, but the foundation of your baby's learning starts with movement and exploration.",
  },
  {
    title:
      "Educational Toy Ideas That Encourage Creativity and Motor Skills in Two-Year-Olds",
    meta: "Joseline Martinez - March 5, 2026",
    image: "/images/ted-blog-6-1.webp",
    href: "#best-educational-toys",
    description:
      "Educational toys for two-year-olds help build fine and gross motor skills, spark creativity, and support early cognitive development.",
  },
  {
    title:
      "Best Educational Toys for 2-Year-Olds: The Ultimate 2026 Guide to Play That Builds Brains",
    meta: "Hajra Abbasi - February 17, 2026",
    image: "/images/TED-blog-img.webp",
    href: "#best-educational-toys-for-2-year-olds",
    description:
      "Discover the top educational toys for 2-year-olds that develop fine and gross motor skills, problem-solving, language, and creativity.",
  },
  {
    title:
      "The Best Toys for Kids with Autism: Engaging Picks to Spark Joy and Development",
    meta: "Joseline Martinez - February 16, 2026",
    image: "/images/bd8564ae-23b1-49bf-a76e-112b7042525c.webp",
    href: "#best-toys-for-kids-with-autism",
    description:
      "These autism-friendly toys don't just entertain they transform playtime into powerful developmental progress.",
  },
  {
    title: "Fun and Developmental Activities for Your 3-Month-Old Infant",
    meta: "Hajra Abbasi - October 14, 2025",
    image: "/images/TED-blog-img-5.webp",
    href: "#fun-and-developmental-activities-for-your-3-month-old-infant",
    description:
      "Discover effective, age-appropriate activities to stimulate your 3-month-old's cognitive, motor, sensory, and emotional development, while supporting early bonding and growth.",
  },
];

const downloads = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
];

function RecommendSecond() {
  return (
    <section className="parenting-blog recommend-second">
      <div className="parenting-blog__inner">
        <div className="recommend-second__main">
          <div className="parenting-heading">
            <p>Why LA parents come back</p>
            <h2>
              <span>Best</span> Recommendations
            </h2>
          </div>

          <div className="parenting-grid">
            {posts.map((post, index) => (
              <a
                className="parenting-card"
                href={post.href}
                key={`${post.title}-${index}`}
              >
                <img src={post.image} alt="" />
                <h3>{post.title}</h3>
                <p className="parenting-card__date">{post.meta}</p>
                <p>{post.description}</p>
              </a>
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
            {posts.slice(0, 5).map((post, index) => (
              <a
                className="related-card"
                href={post.href || "#recommendations"}
                key={`related-${post.href || index}`}
              >
                <img src={post.image} alt="" />
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default RecommendSecond;
