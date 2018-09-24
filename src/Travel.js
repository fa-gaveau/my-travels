import React from "react";

const Quote = ({ quote, text, character, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <blockquote>{text}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;