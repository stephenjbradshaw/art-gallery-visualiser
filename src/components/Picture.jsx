import React from "react";

const Picture = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3>{props.label.makerLine}</h3>
      <p>{props.plaqueDescriptionEnglish}</p>
      <img src={props.webImage.url} alt={props.plaqueDescriptionEnglish} />
    </li>
  );
};

export default Picture;
