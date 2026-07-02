const clarityPoints = [
  "Local guides for L.A, Pasadena, Santa Monica, the South Bay, and beyond",
  "Plain-English explainers for TK, preschool readiness, speech, and autism",
  "Reviewed by educators and specialists you can actually trust",
];

function ClaritySection() {
  return (
    <section className="clarity-section">
      <div className="clarity-section__inner">
        <div className="clarity-copy">
          <p className="clarity-eyebrow">Why LA parents come back</p>
          <h2>
            <span>Less searching.</span>
            More clarity.
          </h2>
          <p className="clarity-copy__intro">
            Most early-education advice is generic, overwhelming, or trying to
            sell you something. We do the opposite, clear local guidance that
            ends with a next step, not another open tab.
          </p>

          <ul className="clarity-list">
            {clarityPoints.map((point, index) => (
              <li key={point}>
                <img
                  src={
                    index === 1
                      ? "/images/badge-check%20(1).svg"
                      : "/images/badge-check.svg"
                  }
                  alt=""
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a className="clarity-button" href="#guides">
            Start with the guides
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="clarity-visual" aria-label="Child learning through play">
          <div className="clarity-visual__blob" aria-hidden="true" />
          <span className="clarity-lines" aria-hidden="true" />
          <img
            className="clarity-visual__child"
            src="/images/Image%20Mask.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="clarity-tag clarity-tag--playing"
            src="/images/Playing.png"
            alt="Playing"
          />
          <img
            className="clarity-tag clarity-tag--learning"
            src="/images/Learning.png"
            alt="Learning"
          />
          <img
            className="clarity-tag clarity-tag--speech"
            src="/images/Music.png"
            alt="Speech"
          />
        </div>
      </div>
    </section>
  );
}

export default ClaritySection;
