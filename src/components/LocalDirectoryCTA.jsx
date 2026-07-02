const directoryCategories = [
  "Preschools",
  "Daycares",
  "Speech Therapy",
  "Autism Support",
  "Summer Camps",
  "Tutors",
];

function LocalDirectoryCTA() {
  return (
    <section className="directory-section">
      <div className="directory-card">
        <div className="directory-card__content">
          <div className="directory-eyebrow-wrap">
            <p className="directory-eyebrow">LA Directory</p>
          </div>

          <h2>
            Trusted local resources,
            <span>all in one place.</span>
          </h2>

          <p className="directory-card__copy">
            Discover the preschools, daycares, therapists, and programs Los
            Angeles families rely on, sorted by neighborhood and reviewed for
            trust
          </p>

          <div className="directory-pills" aria-label="Resource categories">
            {directoryCategories.map((category) => (
              <a
                className="directory-pill"
                href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                key={category}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className="directory-visual" aria-hidden="true">
          <img
            className="directory-illustration"
            src="/images/Group%20512439.png"
            alt=""
          />
        </div>

        <img
          className="directory-ring directory-ring--outer"
          src="/images/err.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="directory-ring directory-ring--inner"
          src="/images/text2.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default LocalDirectoryCTA;
