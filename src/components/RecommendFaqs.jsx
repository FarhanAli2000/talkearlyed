const faqs = [
  "How does Lorem work?",
  "Who can apply for the loan?",
  "How much can I apply for?",
  "How quickly can I get a loan?",
  "What is the repayment term of my loan?",
];

const faqAnswer =
  "We are a free loan broker who will compete for you with the loan offers sent by banks. Just fill in the loan application form and we will send it to several banks. You can then compare the loan offers you receive on your own website and sign the contract!";

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
            <details className="faq-item" key={faq} open={index === 0}>
              <summary>{faq}</summary>
              <p>{faqAnswer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendFaqs;
