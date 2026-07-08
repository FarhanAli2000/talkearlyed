import Header from "../components/Header";
import Footer from "../components/Footer";
import ChildDevelopmentCta from "../components/ChildDevelopmentCta";

const posts = [
  {
    title:
      "Learning Toys for 4-Year-Olds: A Complete Guide to Smart, Fun Play",
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
];

const resources = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
];

const faqs = [
  {
    question: "How do I know if my child is developing on track?",
    answer:
      "Every child develops at their own pace. Milestones are helpful guides, not deadlines. Our resources help you understand what to expect at every stage.",
  },
  {
    question: "What's the best way to encourage healthy development?",
    answer:
      "Talk, read, play, explore, and spend quality time together. Small everyday interactions have a lasting impact on your child's growth.",
  },
  {
    question: "Should I worry if my child reaches milestones later than others?",
    answer:
      "Not always. Every child learns differently, but if something doesn't feel right, seeking professional guidance can provide clarity and peace of mind.",
  },
  {
    question: "Why is play so important?",
    answer:
      "Play is how children discover the world. It builds confidence, creativity, communication, and problem-solving skills—all while having fun.",
  },
  {
    question: "Where can I find trusted child development resources?",
    answer:
      "TalkEarlyEd brings together expert-backed articles, practical tools, and helpful guidance to support your child's journey from infancy through the early years.",
  },
];

function ChildDevelopment() {
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
            <p>Child Development Guide</p>
            <img src="/images/Layer_1-2.png" alt="" aria-hidden="true" />
          </div>
          <h1>
          Little Moments Today. <span>Big Milestones Tomorrow.</span>
          </h1>
          <p className="parenting-hero__copy">
          Every giggle, every new word, and every first step is part of an incredible journey. Explore trusted guidance that helps you understand, support, and celebrate your child's development with confidence.
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
                  href={post.href || "#child-development"}
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
              {posts.slice(0, 4).map((post, index) => (
                <a
                  className="related-card"
                  href={post.href || "#child-development"}
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

      <ChildDevelopmentCta />

      <Footer />
    </main>
  );
}

export default ChildDevelopment;
