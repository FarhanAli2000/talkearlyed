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
    href: "#lunch-ideas-for-picky-eaters",
    description:
      "Finding lunch ideas for picky eaters can feel like solving a daily puzzle. From texture issues to taste aversions, many kids resist healthy food, but it's not impossible to win them over. This guide provides nutritious, fun, and easy-to-prepare lunch options tailored to picky eaters, along with practical strategies to encourage better eating habits.",
  },
  {
    title: "Daycare vs. Stay-at-Home: Which Is Better for Child Development?",
    meta: "Joseline Martinez - May 9, 2025",
    image: "/images/TED-41.webp",
    href: "#daycare-vs-stay-at-home-guide",
    description:
      "Being a new parent comes with a mountain of decisions, and figuring out whether to stay home with your child or enroll them in daycare is one of the big ones. It’s normal to feel a bit all over the place emotionally. You might feel torn, uncertain, even guilty at times. After all, this choice can shape your child’s early social and emotional development, and possibly even their learning down the line.",
  },
  {
    title: "What to Expect in Your Child’s First Year at Daycare",
    meta: "Hajra Abbasi - April 25, 2025",
    image: "/images/daycare-first-year-card.png",
    href: "#first-year-at-daycare-what-to-expect",
    description:
      "Starting daycare is a big step, not just for your child, but for you too. The mix of emotions can be overwhelming: anxiety, hope, guilt, and anticipation. As a parent, you might wonder how your child will adjust, what they’ll learn, and whether the daycare experience will be positive.",
  },
  {
    title: "Two Positive Parenting Tips for Toddlers (2–3 Years): A Practical Guide",
    meta: "Hajra Abbasi - April 24, 2025",
    image: "/images/TED-45.webp",
    description:
      "Parenting a toddler is a wild, beautiful adventure. Between ages 2 and 3, your child is bursting with curiosity, testing boundaries, and expressing big emotions—sometimes all at once. It’s normal to feel overwhelmed or wonder if you’re guiding them the right way.",
  },
  {
    title: "What are two positive parenting tips for middle childhood 6-8 years?",
    meta: "Joseline Martinez - April 14, 2025",
    image: "/images/TED-47.webp",
    description:
      "Parenting during middle childhood (6-8 years) is a critical phase where children develop their personalities, navigate friendships, and understand emotions on a deeper level. Without proper guidance, they may struggle with emotional regulation, self-esteem, and peer interactions, leaving parents feeling uncertain and overwhelmed. Miscommunication and frustration can create distance in the parent-child relationship, making it harder to provide the support children need",
  },
  {
    title: "Building Healthy Snack Habits for Toddlers: Tips for Parents",
    meta: "Hajra Abbasi - February 25, 2025",
    image: "/images/TED-48.webp",
    description:
      "Snacks play an important role in a child’s overall nutrition, which helps them to bring down the gap between food and support their development and development. The goal is not only to fill them, but also to provide nutrient-dense, balanced options that contribute to their energy, mood and health. But as a parent, can you ensure that you are building these habits correctly?",
  },
  {
    title: "Practical Tips For Promoting Healthy Eating Habits In Children",
    meta: "Hajra Abbasi - January 10, 2025",
    image: "/images/TED-49.webp",
    description:
      "Getting kids to eat healthy can feel like a mix of small victories and big battles. Between picky eaters and busy schedules, it’s no surprise that parents often wonder, “How do I make this easier?” The good news? Helping children develop healthy eating habits doesn’t have to be a struggle—it can even be fun!",
  },
  {
    title: "Positive Parenting Tips for Children Aged 5–12",
    meta: "Joseline Martinez - January 10, 2025",
    image: "/images/TED-50.webp",
    description:
      "Parenting is an incredible journey, full of triumphs, surprises, and those “what do I do now?” moments. The years between 5 and 12 are particularly fascinating as kids start figuring out who they are, testing boundaries, and learning how to navigate the world around them. So how can you guide them through this exciting, sometimes bumpy stage with confidence?",
  },
  {
    title: "Tips for a Smooth Transition to Daycare: A Guide for Parents and Guardians",
    meta: "Joseline Martinez - March 20, 2024",
    image: "/images/TED-56.webp",
    description:
      "Having your kids in a safe and secure daycare makes going to work or school a lot easier on parents and guardians. It’s a difficult process to navigate when it’s your child’s first time in a daycare setting or simply the first time away from you.",
  },
  {
    title: "The Terrible Twos Survival Guide: A Preschool Parent’s Manual",
    meta: "Joseline Martinez - February 26, 2024",
    image: "/images/TED-58.webp",
    description:
      "Welcome to the world of parenting! This guide is specially crafted for parents navigating the maze of their toddler’s ‘terrible twos.’ It’s an exciting yet challenging time, and we’re here to help you understand and cope with the dynamics of your child’s growth and development.",
  },
  {
    title: "The Impact of Teachers’ Demeanor in Times of Stress: How to Cope and What Parents Should Assess",
    meta: "Joseline Martinez - February 21, 2024",
    image: "/images/TED-60.webp",
    description:
      "As a parent, dropping off your child at daycare or preschool can be an emotional experience. You want to ensure your little one is in good hands, surrounded by caring and capable individuals who will nurture their growth and well-being.",
  },
  {
    title: "Empathizing the Vital Significance: Understanding Pre-existing Medical Conditions in Preschoolers",
    meta: "Hajra Abbasi - February 9, 2024",
    image: "/images/TED-62.webp",
    description:
      "Pre-school is a magical time, full of laughter, learning, and boundless curiosity. Yet, for some children, this journey comes with unique challenges. As parents and educators, it’s crucial to recognize and understand the significance of pre-existing medical conditions in preschool-aged children.",
  },
  {
    title: "6 Tips for Teaching Your Child to Use Scissors",
    meta: "Joseline Martinez - August 11, 2022",
    image: "/images/blog-default-7.webp",
    description:
      "Have you ever noticed that one of the areas our young students need to practice a lot is scissors? I think this is partly due to the fact that many, maybe even most of our students do not use scissors at home.",
  },
  {
    title: "Transforming Playtime: Creative Ways to Make Kids’ Activities Exciting in Childcare and Parenting, Embracing Inclusivity",
    meta: "Joseline Martinez - August 11, 2022",
    image: "/images/blog-default-6.webp",
    description:
      "Let me tell you that our classes are more than just lessons. It’s a fast-paced, skill-filled time of day that covers just about every area of content we explore.",
  },
  {
    title: "Crafts for Kids That Echo with Childhood Delight",
    meta: "Joseline Martinez - August 10, 2022",
    image: "/images/blog-default-3.webp",
    description:
      "Kids love to show off their creativity and skills with fun, hands-on crafts throughout the year.",
  },
  {
    title: "Short Vowel Reading Fluency To Build Strong Readers!",
    meta: "Joseline Martinez - August 10, 2022",
    image: "/images/blog-default-2.webp",
    description:
      "When it comes to reading instruction, reading fluency is the ultimate goal. Fluency is the ability to read text quickly, accurately, and with proper expression.",
  },
  {
    title: "6 Activities Your Kids Will Love",
    meta: "Hajra Abbasi - August 10, 2022",
    image: "/images/blog-default-1.webp",
    description:
      "Heading into a new year, after a long holiday break, calls for new engaging activities for students!",
  },
  {
    title: "What can tracks teach kids Preschool science is activities are a big deal",
    meta: "Joseline Martinez - January 8, 2022",
    image: "/images/blog-single.webp",
    description:
      "f architecto asperiores aut repellendus Analyzing competing products or services can give you an idea of what already exists in your industry. This can help you find ways to improve your idea. It can also help you target weaknesses in your product or service before you spend time and money creating it. Be sure to note your competitor’s prices during this process, which will give you a range of how much customers are currently spending on similar products",
  },
  {
    title: "How to Choose the Right Daycare For Your Child",
    meta: "Hajra Abbasi - April 9, 2021",
    image: "/images/blog-6.webp",
    href: "#how-to-choose-the-right-centers-for-your-child",
    description:
      "I’ll help you develop a positive relationship with food so you never have to suffer a fad diet ever again. You’ll boost your fitness & energy levels like never before and you’ll learn how to train effectively so you maintain your amazing results long after we’ve worked together.",
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
