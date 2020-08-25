import React from "react";

const Picture = (props) => {
  return (
    <section className="picture">
      <img src={props.webImage.url} alt={props.plaqueDescriptionEnglish} />
    </section>
  );
};

export default Picture;
