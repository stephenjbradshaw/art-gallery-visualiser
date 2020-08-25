import React from "react";

const PictureInfo = (props) => {
  return (
    <article className="pictureInfo">
      <h2>{props.title}</h2>
      <h3>{props.label.makerLine}</h3>
      <p>{props.plaqueDescriptionEnglish}</p>
    </article>
  );
};

export default PictureInfo;
