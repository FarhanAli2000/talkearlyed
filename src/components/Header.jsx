const navItems = [
  { label: "Home", href: "#home" },
  { label: "Parenting", href: "#parenting" },
  { label: "Early Education", href: "#early-education" },
  { label: "Special Needs", href: "#special-needs" },
  {
    label: "Los Angeles Resources",
    href: "#los-angeles-resources",
    children: [{ label: "Preschool Lists", href: "#preschool-lists" }],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
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

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div className="main-nav__item" key={item.label}>
              <a className="main-nav__link" href={item.href}>
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
