function HelpDifference() {
  return (
    <section className="difference-section">
      <div className="difference-section__inner">
        <div className="difference-copy">
          <div className="difference-eyebrow-wrap">
            <p className="difference-eyebrow">What makes us different</p>
            <img
              className="difference-eyebrow-line"
              src="/images/Asset%2013.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <h2>
            Built to <span>actually help</span>
          </h2>
          <p>
            No clickbait, no filler. Just warm, credible guidance with the local
            detail Los Angeles families need to make a real decision
          </p>
        </div>

        <article className="difference-card difference-card--local">
          <img
            className="difference-squiggle"
            src="/images/Vector%20(1).png"
            alt=""
            aria-hidden="true"
          />
          <h3>Local-first</h3>
          <p>Built around Los Angeles neighborhoods and how parents really search</p>
          <img
            className="difference-card__photo"
            src="/images/Image%20(1).png"
            alt="Parent and child painting together"
          />
        </article>

        <div className="difference-stack">
          <article className="difference-card difference-card--small">
            <h3>Expert-reviewed</h3>
            <p>Every guide checked by educators and specialists.</p>
          </article>
          <article className="difference-card difference-card--small difference-card--next">
            <h3>Always a next step</h3>
            <p>Each page ends with a checklist, a resource, or where to go next</p>
          </article>
        </div>
      </div>

      <img
        className="difference-ring"
        src="/images/ring.png"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}

export default HelpDifference;
