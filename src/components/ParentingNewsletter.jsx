function ParentingNewsletter({
  badge = "Parent Newsletter",
  title = "Subscribe for Parenting Tips",
  description = "Preschool checklists, TK reminders, and local guides, short, useful, and made for busy parents",
  sectionClassName = "",
}) {
  return (
    <section
      className={`parenting-newsletter${sectionClassName ? ` ${sectionClassName}` : ""}`}
    >
      <div className="parenting-newsletter__card">
        <img
          className="parenting-newsletter__ring parenting-newsletter__ring--top"
          src="/images/rings.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="parenting-newsletter__ring parenting-newsletter__ring--bottom"
          src="/images/rings.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="parenting-newsletter__pipa"
          src="/images/pipa.png"
          alt=""
          aria-hidden="true"
        />

        <span>{badge}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default ParentingNewsletter;
