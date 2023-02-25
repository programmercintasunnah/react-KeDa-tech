import React, { Component } from "react";
import { cetakAngka } from "./App";

export default class Utama extends Component {
  render() {
    return (
      <div>
        KeDa Tech
        {cetakAngka(15)}
      </div>
    );
  }
}
