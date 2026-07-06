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
];

const resources = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
];

const faqs = [
  "How does Lorem work?",
  "Who can apply for the loan?",
  "How much can I apply for?",
  "How quickly can I get a loan?",
  "What is the repayment term of my loan?",
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
            <p>Early education, made simple for L.A families</p>
            <img src="/images/Layer_1-2.png" alt="" aria-hidden="true" />
          </div>
          <h1>
            Helping Los Angeles <span>Early Education</span>
          </h1>
          <p className="parenting-hero__copy">
            From sensory play to creative crafts and learning toys, we help you
            find fun, developmentally rich activities for babies, toddlers, and
            preschoolers across Los Angeles
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
              <details className="faq-item" key={faq} open={index === 0}>
                <summary>{faq}</summary>
                <p>
                  We are a free loan broker who will compete for you with the
                  loan offers sent by banks. Just fill in the loan application
                  form and we will send it to several banks.
                </p>
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
