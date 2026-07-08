export const interFontFamily = "Inter, sans-serif";

export const descriptionTextClass = "description-text";
export const buttonTextClass = "button-text";
export const cardDesClass = "card-des";

export const typographyStyles = {
  fontFamily: interFontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: 0,
};

export const descriptionStyles = {
  ...typographyStyles,
  textAlign: "center",
  maxWidth: "627px",
};

export const buttonTextStyles = {
  ...typographyStyles,
};

export const cardDesStyles = {
  fontFamily: interFontFamily,
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "150%",
  letterSpacing: 0,
  maxWidth: "257.25px",
};

function Description({ children, className = "" }) {
  return (
    <p className={`description-text${className ? ` ${className}` : ""}`}>
      {children}
    </p>
  );
}

export function CardDes({ children, className = "" }) {
  return (
    <p className={`card-des${className ? ` ${className}` : ""}`}>
      {children}
    </p>
  );
}

export default Description;