function HomeGuidance() {
  return (
    <section className="home-guidance">
      <img
        className="home-guidance__ring"
        src="/images/ring.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="home-guidance__decor home-guidance__decor--star-top"
        src="/images/Star%201.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="home-guidance__decor home-guidance__decor--star-bottom"
        src="/images/Star%201.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="home-guidance__decor home-guidance__decor--spiral"
        src="/images/Asset%2049.png"
        alt=""
        aria-hidden="true"
      />

      <div className="home-guidance__inner">
        <img
          className="home-guidance__image"
          src="/images/Guidance.png"
          alt="Teacher helping children with an activity in a classroom"
        />

        <div className="home-guidance__copy">
          <p className="home-guidance__eyebrow">Made for LA parents</p>
          <h2>
            Guidance that helps <span>every child grow</span>
          </h2>
          <p>
            Every child learns differently, and every family deserves clear
            support when making early education decisions. Talk Early Ed helps
            Los Angeles parents understand their options, compare trusted local
            programs, and find the right help for their child's learning,
            communication, behavior, and development needs. From preschool and
            daycare to speech therapy, tutoring, assessments, and parent
            resources, we bring helpful guidance into one simple place so
            families can feel confident about the next step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeGuidance;
