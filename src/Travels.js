import React from "react";
// src/Quotes.js

import Travel from "./Travel";

const travels = [
  {
    text1: "Africa",
    text2: "Egypt",
    text3: "much kilometers",
    image: "https://nsa39.casimages.com/img/2018/09/25/180925022413229597.jpg"
  },
  {
    text1: "America",
    text2: "USA",
    text3: "much kilometers",
    image: "https://nsa39.casimages.com/img/2018/09/25/180925051453861404.jpg"
  },
  {
    text1: "Asia",
    text2: "North Corea",
    text3: "Oo",
    image: "https://nsa39.casimages.com/img/2018/09/25/180925051605991244.jpg"
  },
  {
    text1: "Europe",
    text2: "France",
    text3: "here",
    image: "https://nsa39.casimages.com/img/2018/09/25/180925051930988638.jpg"
  },
  {
    text1: "Space",
    text2: "??",
    text3: "Oo",
    image: "https://nsa39.casimages.com/img/2018/09/25/180925052032803370.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel text1={travel.text1} image={travel.image} text2={travel.text2} text3={travel.text3} />
    ))}
  </div>
);

export default Travels;

