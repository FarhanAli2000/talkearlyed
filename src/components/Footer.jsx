const footerColumns = [
  {
    title: "Resources",
    links: [
      "Find a Preschool",
      "Find a Daycare",
      "Speech Therapy Resources",
      "Autism Resources",
      "Summer Camps",
    ],
  },
  {
    title: "Popular Guides",
    links: [
      "Universal TK Guide",
      "KG Readiness Checklist",
      "Preschool Cost Guide",
      "Preschool vs TK",
    ],
  },
  {
    title: "Locations",
    links: [
      "Pasadena",
      "Santa Monica",
      "Silver Lake",
      "South Bay",
      "San Fernando Valley",
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "#x",
    icon: "/images/logo-twitter%202.svg",
  },
  {
    label: "Facebook",
    href: "#facebook",
    icon: "/images/logo-twitter%202.png",
  },
  {
    label: "Instagram",
    href: "#instagram",
    icon: "/images/logo-twitter%202%20(1).png",
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: "/images/logo-twitter%202%20(1).svg",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <img
        className="site-footer__wave"
        src="/images/Group%20514937.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="site-footer__decor site-footer__decor--half"
        src="/images/half.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="site-footer__decor site-footer__decor--spiral"
        src="/images/Asset%2049.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="site-footer__decor site-footer__decor--dots"
        src="/images/Asset%2047.png"
        alt=""
        aria-hidden="true"
      />

      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/images/Group%2076.png"
            alt="Talk Early Ed"
          />
          <p>
            Helping Los Angeles families find the right start for their little
            learners
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <div className="site-footer__social" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href={link.href} aria-label={link.label} key={link.label}>
                <img src={link.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p>2026 Talk Early Ed. All rights reserved.</p>

          <div className="site-footer__legal">
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
