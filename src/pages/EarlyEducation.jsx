import Header from "../components/Header";
import Footer from "../components/Footer";

const posts = [
  {
    title:
      "Crafts for Kids: Easy, Creative, and Educational Activities For Every Age",
    meta: "Daniela Lopez - June 16, 2026",
    image: "/images/WhatsApp-Image-2026-06-16-at-4.41.23-PM.webp",
    href: "#crafts-for-kids",
    description:
      "This blog explores the best outdoor sensory play ideas for babies and toddlers that are fun, safe, and developmentally enriching.",
  },
  {
    title: "Outdoor Sensory Play Ideas for Babies and Toddlers",
    meta: "Daniela Lopez - May 8, 2026",
    image: "/images/blog10.webp",
    href: "#outdoor-sensory-play-ideas-for-babies-and-toddlers",
    description:
      "This blog explores the best outdoor sensory play ideas for babies and toddlers that are fun, safe, and developmentally enriching.",
  },
  {
    title: "Indoor Sensory Activities for Infants During Rainy Days",
    meta: "Daniela Lopez - May 7, 2026",
    image: "/images/featued-1-1.webp",
    href: "#indoor-sensory-activities-for-infants-during-rainy-days",
    description:
      "This blog provides practical indoor sensory activities for infants to keep them engaged and support development on rainy days.",
  },
];

const resources = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
];

const faqs = [
  {
    question: "What is early childhood education?",
    answer:
      "Early childhood education focuses on helping children develop essential cognitive, social, emotional, and communication skills during their most important years of growth.",
  },
  {
    question: "When should my child start preschool?",
    answer:
      "Every child is different, but many children begin preschool between the ages of 3 and 4, depending on their developmental readiness and family goals.",
  },
  {
    question: "What is Transitional Kindergarten (TK)?",
    answer:
      "Transitional Kindergarten is California's bridge between preschool and kindergarten, giving eligible children an extra year to build confidence and foundational learning skills.",
  },
  {
    question: "How can I support learning at home?",
    answer:
      "Reading together, encouraging curiosity, engaging in hands-on activities, and maintaining consistent routines all help reinforce early learning.",
  },
  {
    question: "Why is early education so important?",
    answer:
      "High-quality early education helps children develop confidence, independence, problem-solving abilities, and the foundational skills they need for long-term academic success.",
  },
];

function EarlyEducation() {
  return (
    <main className="parenting-page">
      <Header />

      <section
        className="parenting-hero"
        style={{ backgroundImage: 'url("/images/girl1.png")' }}
      >
        <div className="parenting-hero__overlay" />
        <div className="parenting-hero__content">
          <div className="parenting-hero__eyebrow-wrap">
            <p>Early Education Guide</p>
            <img src="/images/Layer_1-2.png" alt="" aria-hidden="true" />
          </div>
          <h1>
            <span className="parenting-hero__title-main">Building Bright Futures</span>{" "}
            <span className="parenting-hero__title-accent">
              Starts with Early Learning
            </span>
          </h1>
          <p className="parenting-hero__copy">
            Every great learning journey begins with the right foundation.
            Discover expert guidance, school readiness resources, and practical
            tools to help your child grow with confidence, from preschool
            through kindergarten and beyond
          </p>
        </div>
        <img
          className="parenting-hero__decor parenting-hero__decor--star"
          src="/images/Star%201.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="parenting-hero__decor parenting-hero__decor--spiral"
          src="/images/Asset%2049.png"
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="parenting-blog">
        <div className="parenting-blog__inner">
          <div className="parenting-blog__main">
            <div className="parenting-heading">
              <p>Why L.A parents come back</p>
              <h2>
                <span>Less searching</span> More clarity
              </h2>
            </div>

            <div className="parenting-grid">
              {posts.map((post, index) => (
                <a
                  className="parenting-card"
                  href={post.href || "#early-education"}
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
              {resources.map((resource) => (
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
                <article className="related-card" key={`related-${index}`}>
                  <img src={post.image} alt="" />
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="parenting-faq">
        <div className="parenting-faq__inner">
          <div className="parenting-heading">
            <p>Discover</p>
            <h2>
              <span>Frequently</span> Asked Questions
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="parenting-newsletter">
        <div className="parenting-newsletter__card">
          <span>Early Education Newsletter</span>
          <h2>Subscribe for Learning Tips</h2>
          <p>
            Sensory play ideas, craft activities, and toy guides — short,
            useful, and made for busy parents
          </p>
          <form>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default EarlyEducation;
