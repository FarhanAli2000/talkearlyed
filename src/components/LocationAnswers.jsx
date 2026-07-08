import Description from "./Styling";

const neighborhoods = [
  "Pasadena",
  "Santa Monica",
  "Silver Lake",
  "Echo Park",
  "South Bay",
  "San Fernando Valley",
  "Glendale",
  "Burbank",
  "Culver City",
  "West LA",
];

function LocationAnswers() {
  return (
    <section
      className="location-section"
      style={{ backgroundImage: 'url("/images/Group%20514926.png")' }}
    >
      <div className="location-section__inner">
        <article className="location-card location-card--search">
          <div className="location-card__circle" aria-hidden="true" />
          <h2>
            Search by <span>where you live</span>
          </h2>
          <Description className="location-card__copy">
            Every guide is sorted by where Los Angeles parents actually live and
            search.
          </Description>
          <div className="location-pills">
            {neighborhoods.map((place) => (
            <a href={`#${place.toLowerCase().replaceAll(" ", "-")}`} key={place}>
                <span className="location-pills__pin" aria-hidden="true" />
                {place}
              </a>
            ))}
          </div>
        </article>

        <article className="location-card location-card--answers">
          <h2>
            Answers built for how <span>LA parents search</span>
          </h2>
          <Description className="location-card__copy">
            Preschools, daycare, speech therapy, autism support, camps, tutors,
            each topic mapped to its own city and neighborhood pages, so you land
            on the right answer fast.
          </Description>
          <img
            src="/images/Image%20(Family%20outdoors%20in%20a%20sunny%20park).png"
            alt="Hollywood neighborhood"
          />
        </article>
      </div>
    </section>
  );
}

export default LocationAnswers;
