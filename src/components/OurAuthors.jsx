const authors = [
  {
    firstName: "Hajra",
    lastName: "Abbassi",
    image: "/images/auth1.png",
    href: "#hajra-abbassi",
  },
  {
    firstName: "Joseline",
    lastName: "Martinez",
    image: "/images/auth2.png",
    href: "#joseline-martinez",
  },
  {
    firstName: "Daniela",
    lastName: "Morales",
    image: "/images/auth3.png",
    href: "#daniela-morales",
  },
  {
    firstName: "Maddie",
    lastName: "Win",
    image: "/images/auth4.png",
    href: "#maddie-win",
  },
];

function OurAuthors() {
  return (
    <section className="our-authors">
      <div className="our-authors__inner">
        <div className="our-authors__heading">
          <p className="our-authors__eyebrow">Meet</p>
          <h2>
            Our <span>Authors</span>
          </h2>
          <p className="our-authors__copy">
            We have received many positive testimonials from parents about the
            program
          </p>
        </div>

        <div className="our-authors__grid">
          {authors.map((author) => (
            <a className="our-authors__card" href={author.href} key={author.href}>
              <div className="our-authors__photo-wrap">
                <img
                  className="our-authors__photo"
                  src={author.image}
                  alt={`${author.firstName} ${author.lastName}`}
                />
              </div>
              <h3>
                {author.firstName} <span>{author.lastName}</span>
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurAuthors;
