const directoryCategories = [
  { label: "Preschools", href: "#preschool-lists" },
  { label: "Daycares", href: "#los-angeles-resources" },
  { label: "Speech Therapy", href: "#special-needs" },
  { label: "Autism Support", href: "#special-needs" },
  { label: "Summer Camps", href: "#recommendations" },
  { label: "Tutors", href: "#recommendations" },
];

function LocalDirectoryCTA() {
  return (
    <section className="directory-section">
      <div className="directory-card">
        <div className="directory-card__content">
          <div className="directory-eyebrow-wrap">
            <p className="directory-eyebrow">
              <span className="directory-eyebrow__script">LA</span> Directory
            </p>
            <img
              className="directory-eyebrow__underline"
              src="/images/Layer_1-2.png"
              alt=""
              aria-hidden="true"
            />
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
              <a className="directory-pill" href={category.href} key={category.label}>
                {category.label}
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
          className="directory-ring"
          src="/images/err.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default LocalDirectoryCTA;
