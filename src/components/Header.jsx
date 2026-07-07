import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Parenting", href: "#parenting" },
  { label: "Early Education", href: "#early-education" },
  { label: "Child Development", href: "#child-development" },
  { label: "Special Needs", href: "#special-needs" },
  {
    label: "Los Angeles Resources",
    href: "#los-angeles-resources",
    children: [
      { label: "Preschool Lists", href: "#preschool-lists" },
      { label: "Daycare", href: "#daycare" },
      { label: "Speech Therapy", href: "#speech-therapy" },
      { label: "Summer Camps", href: "#summer-camps" },
      { label: "Autism Resources", href: "#autism-resources" },
    ],
  },
  { label: "Recommendations", href: "#recommendations" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="#home" aria-label="Talk Early home">
          <img
            className="site-logo__image"
            src="/images/Link%20-%20Talk%20Early%20Ed%20home.svg"
            alt="Talk Early"
          />
        </a>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-bar" aria-hidden="true" />
          <span className="site-header__menu-bar" aria-hidden="true" />
          <span className="site-header__menu-bar" aria-hidden="true" />
        </button>

        <nav
          id="main-nav"
          className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <div className="main-nav__item" key={item.label}>
              <a className="main-nav__link" href={item.href} onClick={closeMenu}>
                {item.label}
                {item.children && (
                  <span className="main-nav__chevron" aria-hidden="true" />
                )}
              </a>

              {item.children && (
                <div className="main-nav__dropdown">
                  {item.children.map((child) => (
                    <a
                      className="main-nav__dropdown-link"
                      href={child.href}
                      key={child.label}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
