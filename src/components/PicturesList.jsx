import React, { Component } from "react";
import Picture from "./Picture";
import Visualiser from "./Visualiser";
import PictureInfo from "./PictureInfo";
import * as api from "../api";

class PicturesList extends Component {
  state = { artObjects: [], isLoading: true };

  componentDidMount() {
    this.getGalleryData();
  }

  render() {
    const { isLoading, artObjects } = this.state;
    if (isLoading) return <p id={"load"}>Loading...</p>;
    return (
      <section>
        <ul>
          {artObjects.map((artObject) => {
            return (
              <li>
                <PictureInfo key={artObject.objectNumber} {...artObject} />
                <section className="pictureAndChart">
                  <Picture key={artObject.objectNumber} {...artObject} />
                  <Visualiser
                    key={artObject.objectNumber + "artColor"}
                    {...artObject}
                  />
                </section>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  getGalleryData() {
    this.setState({ isLoading: true });
    api.fetchGalleryData().then((artObjects) => {
      this.setState({ artObjects, isLoading: false });
      console.log(artObjects, "ART GALLERY DATA");
    });
  }
}

export default PicturesList;
