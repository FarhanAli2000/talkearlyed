const footerColumns = [
  {
    title: "Resources",
    links: [
      { label: "Find a Preschool", href: "#preschool-lists" },
      { label: "Find a Daycare", href: "#los-angeles-resources" },
      { label: "Speech Therapy Resources", href: "#special-needs" },
      { label: "Autism Resources", href: "#special-needs" },
      { label: "Summer Camps", href: "#recommendations" },
    ],
  },
  {
    title: "Popular Guides",
    links: [
      { label: "Universal TK Guide", href: "#early-education" },
      { label: "KG Readiness Checklist", href: "#child-development" },
      { label: "Preschool Cost Guide", href: "#parenting" },
      { label: "Preschool vs TK", href: "#early-education" },
    ],
  },
  {
    title: "Meet the Authors",
    links: [
      { label: "Meet Hajra Abbasi", href: "#hajra-abbasi" },
      { label: "Meet Joseline Martinez", href: "#joseline-martinez" },
      { label: "Meet Daniela Lopez", href: "#daniela-morales" },
      { label: "Meet Maddie Win", href: "#maddie-win" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Cookies Policy", href: "#cookies-policy" },
      { label: "Disclaimer", href: "#disclaimer" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms and Conditions", href: "#terms" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586511214196",
    icon: "/images/logo-twitter%202.png",
  },
  {
    label: "Medium",
    href: "https://medium.com/@talkearlyed",
    icon: "/images/logo-twitter%202%20(1).png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@talkearlyed?lang=en-GB",
    icon: "/images/logo-twitter%202%20(1).svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/talkearlyed3/",
    icon: "/images/logo-twitter%202.svg",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/talkearlyed/",
    icon: "/images/logo-twitter%202%20(1).png",
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/Due-Needleworker4605/",
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
            TalkEarlyEd is a trusted early learning resource helping Los Angeles
            families make confident choices for their little learners.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <div className="site-footer__social" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                aria-label={link.label}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <img src={link.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p>2026 Talk Early Ed. All rights reserved.</p>

          <div className="site-footer__legal">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
