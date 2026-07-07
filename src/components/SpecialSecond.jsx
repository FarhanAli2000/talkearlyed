const posts = [
  {
    title:
      "The Best Toys For Kids with Autism: Engaging Picks to Spark Joy and Development",
    meta: "Joseline Martinez - February 16, 2026",
    image: "/images/bd8564ae-23b1-49bf-a76e-112b7042525c.webp",
    href: "#best-toys-for-kids-with-autism",
    description:
      "These autism-friendly toys don't just entertain they transform playtime into powerful developmental progress.",
  },
  {
    title:
      "Empathizing the Vital Significance: Understanding Pre-existing Medical Conditions in Preschoolers",
    meta: "Hajra Abbasi - February 9, 2024",
    image: "/images/TED-62.webp",
    href: "#empathizing-the-vital-significance-understanding-pre-existing-medical-conditions-in-preschoolers",
    description:
      "Pre-school is a magical time, full of laughter, learning, and boundless curiosity. Yet, for some children, this journey comes with unique challenges. As parents and educators, it's crucial to recognize and understand the significance of pre-existing medical conditions in preschool-aged children.",
  },
  {
    title: "Autism Puzzle Piece | Autism Puzzle Piece Symbol",
    meta: "Joseline Martinez - November 9, 2023",
    image: "/images/Autism-Puzzle-Piece-Autism-Puzzle-Piece-Symbol.webp",
    href: "#autism-puzzle-piece-autism-puzzle-piece-symbol",
    description:
      "Autism, or Autism Spectrum Disorder (ASD), is a developmental illness marked by challenges with social interaction and communication and often includes repetitive behaviors. The spectrum nature of autism means that it manifests differently in each individual, with varying degrees of impact on daily functioning.",
  },
  {
    title:
      "Reassessing the Autism Puzzle Piece: The Case for Change and Preferred Alternatives",
    meta: "Joseline Martinez - November 9, 2023",
    image:
      "/images/Reassessing-the-Autism-Puzzle-Piece-The-Case-for-Change-and-Preferred-Alternatives.webp",
    href: "#reassessing-the-autism-puzzle-piece-the-case-for-change-and-preferred-alternatives",
    description:
      "Autism Spectrum Disorder (ASD) is an intricate illness that contains a range of neurological variations. For decades, the emblem most associated with autism has been the puzzle piece.",
  },
  {
    title:
      "Crafting Tiny Masterpieces: Nurturing Fine Motor Skills in Infants and Toddlers",
    meta: "Joseline Martinez - August 10, 2022",
    image: "/images/blog-default-4.webp",
    href: "#10-ways-to-improve-fine-motor-skills",
    description:
      "As a teacher, we know the importance of a child having strong fine motor skills. These skills will help them with a variety of everyday tasks for the rest of their lives.",
  },
  {
    title: "Short Vowel Reading Fluency To Build Strong Readers!",
    meta: "Joseline Martinez - August 10, 2022",
    image: "/images/blog-default-2.webp",
    href: "#short-vowel-reading-fluency-to-build-strong-readers",
    description:
      "When it comes to reading instruction, reading fluency is the ultimate goal. Fluency is the ability to read text quickly, accurately, and with proper expression.",
  },
  {
    title: "6 Activities Your Kids Will Love",
    meta: "Hajra Abbasi - August 10, 2022",
    image: "/images/blog-default-1.webp",
    href: "#6-activities-your-kids-will-love",
    description:
      "Heading into a new year, after a long holiday break, calls for new engaging activities for students!",
  },
];

const downloads = [
  "Preschools",
  "Morning Routine Checklist",
  "Preschool Questions PDF",
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
                <span className="parenting-card__link">Read More »</span>
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
  );
}

export default SpecialSecond;
