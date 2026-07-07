const faqs = [
  {
    question: "How are products selected?",
    answer:
      "We recommend products based on educational value, safety, durability, expert guidance, and real parent feedback.",
  },
  {
    question: "Are these recommendations age-specific?",
    answer:
      "Yes. Many of our recommendations are organized by age, developmental stage, and learning goals.",
  },
  {
    question: "Do you recommend toys for children with special needs?",
    answer:
      "Absolutely. You'll find sensory toys, communication tools, adaptive learning resources, and products designed for diverse developmental needs.",
  },
  {
    question: "Are these products reviewed by experts?",
    answer:
      "Our recommendations are based on trusted educational research, child development principles, and practical family experiences.",
  },
  {
    question: "Can I find gift ideas for different ages?",
    answer:
      "Yes. Explore curated gift guides and educational recommendations for babies, toddlers, preschoolers, and school-age children.",
  },
];

function RecommendFaqs() {
  return (
    <section className="parenting-faq recommend-faqs">
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
  );
}

export default RecommendFaqs;
