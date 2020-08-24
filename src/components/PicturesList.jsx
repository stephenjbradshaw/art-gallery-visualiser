import React, { Component } from "react";
import Picture from "./Picture";
import Visualiser from "./Visualiser";
import * as api from "../api";

class PicturesList extends Component {
  componentDidMount() {
    this.getGalleryData();
  }

  render() {
    return (
      <section>
        <Visualiser />

        <ul>
          <li>
            <p>Picture heading</p>
            <Picture />
          </li>
          <li>
            <p>Picture heading</p>
            <Picture />
          </li>
          <li>
            <p>Picture heading</p>
            <Picture />
          </li>
        </ul>
      </section>
    );
  }

  getGalleryData() {
    api.fetchGalleryData();
  }
}

export default PicturesList;
