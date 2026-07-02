const navItems = [
  "Home",
  "Parenting",
  "Early Education",
  "Special Needs",
  "Los Angeles Resources",
  "About",
  "Contact",
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="/" aria-label="Talk Early home">
          <img
            className="site-logo__image"
            src="/images/Link%20-%20Talk%20Early%20Ed%20home.svg"
            alt="Talk Early"
          />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              className="main-nav__link"
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
            >
              {item}
              {item === "Los Angeles Resources" && (
                <span className="main-nav__chevron" aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
