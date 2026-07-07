const faqs = [
  {
    question: "What conditions are covered in this section?",
    answer:
      "Explore resources for autism, ADHD, speech delays, sensory processing, developmental delays, Down syndrome, dyslexia, and other developmental differences.",
  },
  {
    question: "When should I seek professional support?",
    answer:
      "If you're concerned about your child's development, early evaluation can provide answers and connect you with the right services.",
  },
  {
    question: "What is Early Intervention?",
    answer:
      "Early Intervention offers specialized services for young children to support communication, learning, movement, and social development during the most important years.",
  },
  {
    question: "How can therapy help my child?",
    answer:
      "Speech, occupational, physical, and behavioral therapies help children build skills, confidence, and independence at their own pace.",
  },
  {
    question: "Are these resources suitable for newly diagnosed families?",
    answer:
      "Yes. Whether you're seeking answers or ongoing support, you'll find trusted information, practical guides, and local resources.",
  },
];

function SpecialFaqs() {
  return (
    <section className="parenting-faq special-faqs">
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

export default SpecialFaqs;
