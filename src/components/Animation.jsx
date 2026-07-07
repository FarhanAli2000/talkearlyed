const topRowItems = [
  { type: "text", label: "Early Reading" },
  { type: "icon", src: "/images/Asset%2049.png", alt: "" },
  { type: "text", label: "Speech & Language" },
  {
    type: "pill",
    src: "/images/Image%20(Family%20outdoors%20in%20a%20sunny%20park).png",
    alt: "Child outdoors",
  },
  { type: "text", label: "Early Reading" },
  { type: "icon", src: "/images/Asset%2047.png", alt: "" },
  { type: "text", label: "Early Reading" },
];

const bottomRowItems = [
  { type: "icon", src: "/images/Asset%2047.png", alt: "" },
  { type: "text", label: "Early Reading" },
  { type: "pill", src: "/images/Playing.png", alt: "Colorful hand activity" },
  { type: "text", label: "Early Reading" },
  { type: "icon", src: "/images/Star%201.png", alt: "" },
  { type: "text", label: "Early Reading" },
  { type: "pill", src: "/images/girl3.png", alt: "Children in classroom" },
  { type: "text", label: "Early Reading" },
];

function MarqueeItem({ item }) {
  if (item.type === "text") {
    return <span className="animation-marquee__text">{item.label}</span>;
  }

  if (item.type === "icon") {
    return (
      <img
        className="animation-marquee__icon"
        src={item.src}
        alt={item.alt}
        aria-hidden={!item.alt}
      />
    );
  }

  return (
    <img
      className="animation-marquee__pill"
      src={item.src}
      alt={item.alt}
      aria-hidden={!item.alt}
    />
  );
}

function MarqueeRow({ items, direction }) {
  const trackItems = [...items, ...items];

  return (
    <div className={`animation-marquee__row animation-marquee__row--${direction}`}>
      <div className="animation-marquee__track">
        {trackItems.map((item, index) => (
          <MarqueeItem item={item} key={`${item.type}-${item.label || item.src}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function Animation() {
  return (
    <section className="animation-marquee" aria-label="Featured early education topics">
      <MarqueeRow items={topRowItems} direction="rtl" />
      <MarqueeRow items={bottomRowItems} direction="ltr" />
    </section>
  );
}

export default Animation;
