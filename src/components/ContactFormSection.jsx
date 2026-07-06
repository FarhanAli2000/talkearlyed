const contactBenefits = [
  "Understand how our API product may fulfill your needs",
  "Discover the capabilities and get answers to your questions",
  "Get a customized quote for your busines",
];

function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-section__inner">
        <div className="contact-form-section__copy">
          <h2>
            <span>Contact</span> Us
          </h2>

          <p>
            Contact us by email, phone, or complete the form to discover how
            Bima can effectively address your cloud management and governance
            challenges with tailored solutions.
          </p>

          <h3>Talk to our team today to</h3>

          <ul>
            {contactBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <form className="contact-form" action="#contact" method="post">
          <div className="contact-form__row">
            <label>
              First name
              <input type="text" name="firstName" />
            </label>

            <label>
              Last name
              <input type="text" name="lastName" />
            </label>
          </div>

          <label>
            Work email address
            <input type="email" name="email" />
          </label>

          <label>
            How did you first hear about us
            <textarea name="source" rows="5" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
