function HomeLA() {
  return (
    <section className="home-la">
      <div className="home-la__card">
        <img
          className="home-la__decor"
          src="/images/Layer_1-2%20(1).png"
          alt=""
          aria-hidden="true"
        />

        <div className="home-la__inner">
          <img
            className="home-la__image"
            src="/images/table.png"
            alt="Two professionals meeting at a table in an office"
          />

          <div className="home-la__content">
            <h2>
              Get found by <span>LA parents</span>
            </h2>

            <p className="home-la__copy">
              Preschools, daycares, therapists, and programs, connect with
              local families already searching for trusted early-education help
              in their neighborhood
            </p>

            <div className="home-la__features">
              <article className="home-la__feature home-la__feature--lavender">
                <h3>Get discovered</h3>
                <p>
                  Show up when LA parents search for the support you offer.
                </p>
              </article>

              <article className="home-la__feature home-la__feature--cream">
                <h3>Build trust</h3>
                <p>A verified local profile families can actually rely on.</p>
              </article>
            </div>

            <a className="home-la__button" href="#contact">
              List Your Business
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLA;
