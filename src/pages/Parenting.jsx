import Header from "../components/Header";
import Footer from "../components/Footer";

const posts = [
  {
    title: "Early Childhood Education: Building Strong Foundations",
    meta: "Hajra Abbasi - February 24, 2026",
    image: "/images/TEE-blog-5-1.webp",
    href: "#early-childhood-education-guide",
    description:
      "Discover why early childhood education shapes brain growth, school readiness, and lifelong success. Benefits, FAQs, and expert insights.",
  },
  {
    title: "Essential Advice for New Moms: A Comprehensive Guide to Navigating Early Motherhood",
    meta: "Joseline Martinez - February 19, 2026",
    image: "/images/ddd.webp",
    href: "#advice-for-new-moms-complete-postpartum-survival-recovery-guide",
    description:
      "Becoming a new mom is a transformative journey filled with love and learning.",
  },
  {
    title: "Toddler Lunch Box Ideas: A Complete Guide for Parents",
    meta: "Hajra Abbasi - July 24, 2025",
    image: "/images/TED-27.webp",
    href: "#creative-lunch-ideas-for-toddlers",
    description:
      "Packing a toddler's lunch doesn't have to be stressful. This guide helps parents create lunch boxes that are nutritious, age-appropriate, and fun to eat. From understanding your toddler's nutritional needs to offering creative food ideas and handling picky eating, this blog provides practical, expert-backed solutions.",
  },
  {
    title: "Low-Sugar Breakfast for Kids: A Delicious and Healthy Start to Their Day",
    meta: "Hajra Abbasi - June 17, 2025",
    image: "/images/TED-35.webp",
    href: "#low-sugar-breakfast-ideas-for-kids",
    description:
      "A low-sugar breakfast is essential for kids' focus, mood, and overall health. Unlike sugary cereals or pastries, nutritious morning meals stabilize energy levels and prevent sugar crashes.",
  },
  {
    title: "Lunch Ideas for Picky Eaters: Creative, Healthy & Kid-Approved Solutions",
    meta: "Hajra Abbasi - June 17, 2025",
    image: "/images/TED-37.webp",
    description:
      "Finding lunch ideas for picky eaters can feel like solving a daily puzzle. From texture issues to taste aversions, many kids resist healthy food, but it's not impossible to win them over. This guide provides nutritious, fun, and easy-to-prepare lunch options tailored to picky eaters, along with practical strategies to encourage better eating habits.",
  },
  {
    title: "Daycare vs. Stay-at-Home: Which Is Better for Child Development?",
    meta: "Joseline Martinez - May 9, 2025",
    image: "/images/TED-41.webp",
    description:
      "Being a new parent comes with a mountain of decisions, and figuring out whether to stay home with your child or enroll them in daycare is one of the big ones. It's normal to feel a bit all over the place emotionally. You might feel torn, uncertain, even guilty at times. After all, this choice can shape your child's early social and emotional development, and possibly even their learning down the line.",
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

function Parenting() {
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
            Helping Los Angeles <span>Early Childhood</span>
          </h1>
          <p className="parenting-hero__copy">
            From your first preschool tour to your child's first words, we help
            you find the right early-education support near you, written for
            parents across Los Angeles
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
                  href={post.href || "#parenting"}
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
              {posts.slice(1, 6).map((post, index) => (
                <article className="related-card" key={`related-${index}`}>
                  <img src={post.image} alt="" />
                  <div>
                    <h3>Overview of the Design Principles</h3>
                    <p>What are Design Principles? To understand design principles.</p>
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
          <span>Parent Newsletter</span>
          <h2>Subscribe for Parenting Tips</h2>
          <p>
            Preschool checklists, TK reminders, and local guides, short,
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

export default Parenting;
