const decisionCards = [
  {
    title: "Preschools",
    text: "Play-based, Montessori, and private options near you",
    action: "View guides",
    icon: "/images/Text%20(7).png",
    image: "/images/Text.png",
  },
  {
    title: "Daycares",
    text: "Costs, licensing, and the questions that matter",
    action: "Explore",
    icon: "/images/Text%20(12).png",
    image: "/images/Text%20(1).png",
  },
  {
    title: "Speech Therapy",
    text: "Milestones, delays, and where to get help",
    action: "Learn more",
    icon: "/images/Text%20(9).png",
    image: "/images/Text%20(2).png",
  },
  {
    title: "Autism Support",
    text: "Evaluations, services, and sensory-friendly options",
    action: "Find help",
    icon: "/images/Text%20(11).png",
    image: "/images/Text%20(5).png",
  },
  {
    title: "Summer Camps",
    text: "Seasonal programs for little ones across Los Angeles",
    action: "See ideas",
    icon: "/images/Text%20(10).png",
    image: "/images/Text%20(4).png",
  },
  {
    title: "Tutors",
    text: "Early reading, phonics, and kindergarten readiness",
    action: "Start here",
    icon: "/images/Text%20(8).png",
    image: "/images/Text%20(3).png",
  },
];

function DecisionHelp() {
  return (
    <section className="decision-section">
      <img
        className="decision-decor decision-decor--ring"
        src="/images/Group%20514927.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="decision-decor decision-decor--ellipse"
        src="/images/Ellipse%201.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="decision-decor decision-decor--dots"
        src="/images/Layer_1-2%20(1).png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="decision-skyline"
        src="/images/Group%20512438.png"
        alt=""
        aria-hidden="true"
      />

      <div className="decision-section__inner">
        <div className="decision-heading">
          <p>Where parents start</p>
          <img src="/images/Asset%2031.png" alt="" aria-hidden="true" />
          <h2>
            Quick help for
            <span>the big decisions</span>
          </h2>
          <p className="decision-heading__copy">
            The six things LA families search for most, with local guidance for
            each.
          </p>
        </div>

        <div className="decision-grid">
          {decisionCards.map((card) => (
            <article className="decision-card" key={card.title}>
              <div className="decision-card__image-wrap">
                <img src={card.image} alt="" />
              </div>
              <div className="decision-card__icon">
                <img src={card.icon} alt="" aria-hidden="true" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href={`#${card.title.toLowerCase().replaceAll(" ", "-")}`}>
                {card.action}
                <img src="/images/Text%20(6).png" alt="" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DecisionHelp;
